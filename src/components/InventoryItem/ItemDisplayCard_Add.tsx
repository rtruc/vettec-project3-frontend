import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dismissInventoryRecordCard, updateStateInvRecords, updateStateItems } from "../../redux/actions/actions";
import { RoundRectButton } from "../Generics/Buttons/RoundRectButton";
import { DropDownMenu } from "../Generics/DropDownMenus/DropDownMenu";
import { State } from "../../redux/state";
import { blankItem, Item } from "../../model/item";
import { RecordContainer } from "./Groupings/RecordContainer";
import { ShadowBox } from "./Groupings/ShadowBox";
import { TextColumn } from "./Groupings/TextColumn";
import { TextRow } from "./Groupings/TextRow";
import { NumberInput } from "./Fields/Number";
import { ImageColumn } from "./Fields/ImageColumn";
import { EntryMultiLine } from "./Fields/EntryMultiLine";
import { FieldTitle } from "./Fields/FieldTitle";
import { ItemImage } from "./Fields/ItemImage";
import { EntrySingleLine } from "./Fields/EntrySingleLine";
import { blankRecord } from "../../model/inventoryRecord";
import itemService from "../../services/item.service";
import { Warehouse } from "../../model/warehouse";
import inventoryRecordService from "../../services/inventoryRecord.service";
import warehouseService from "../../services/warehouse.service";

const baseURL = `${process.env.REACT_APP_PHOTO_URL}/`

export interface AddItemDisplayCard {

}

export const AddItemDisplayCard: React.FC<AddItemDisplayCard> = () => {
    const dispatch = useDispatch();

    const { items, activeWarehouse } = useSelector((state: State) => state)

    const cancelClicked = () => dispatch(dismissInventoryRecordCard());

    function addRecordClicked(): void {
        let newRecord = blankRecord;
        newRecord.warehouseID = activeWarehouse?.warehouseID || -1;
        newRecord.item.itemID = item.itemID;
        newRecord.quantity = quantity;

        if (item === blankItem || quantity < 1 || newRecord.warehouseID === -1) {
            return;
        }

        inventoryRecordService.postNewInventoryRecord(newRecord)
            .then(() =>
                warehouseService.getInventoryRecordsForSelectedWarehouse(newRecord.warehouseID)
                    .then( records  => dispatch(updateStateInvRecords(records)))
                    .catch(() => console.log("UPDATE INVENTORY RECORD FAILED")))
            .then(() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }))
            .then(() => dispatch(dismissInventoryRecordCard()))
            .catch(() => console.log("POST FAILED"))
    }

    let [item, setItem] = useState(blankItem)
    let [quantity, setQuantity] = useState(0);

    return (
        <ShadowBox>

            <RecordContainer>

                <ImageColumn>
                    <ItemImage alt={"BEER"} src={baseURL + item.imageURL} />
                    <RoundRectButton onClick={addRecordClicked}> ADD </RoundRectButton>
                    <RoundRectButton onClick={cancelClicked} buttonModifier="caution"> CANCEL </RoundRectButton>
                </ImageColumn>

                <TextColumn>
                    <TextRow>
                        <FieldTitle>ITEM:</FieldTitle>
                        <DropDownMenu onChange={({ target }) => setItem(items.find(i => i.itemID === parseInt(target.value)) || blankItem)}>
                            <option value={""}></option>
                            {items.map((i) => {
                                return (
                                    <option key={i.itemID} value={i.itemID}>
                                        {i.itemName}
                                    </option>
                                )
                            })}
                        </DropDownMenu>
                    </TextRow>

                    <TextRow>
                        <FieldTitle>{item.itemType === 'book' ? "AUTHOR: " : "BREWERY: "} </FieldTitle>
                        <EntrySingleLine> {item.brand.brandName}</EntrySingleLine>
                    </TextRow>

                    <TextRow>
                        <FieldTitle>SIZE:</FieldTitle>
                        <EntrySingleLine>{item.unitVolume}</EntrySingleLine>
                    </TextRow>

                    <TextRow>
                        <FieldTitle>QUANTITY: </FieldTitle>
                        <NumberInput onChange={(e) => setQuantity(parseInt(e.target.value))}
                            defaultValue={quantity} />
                    </TextRow>

                    <TextRow>
                        <FieldTitle>TOTAL SPACE:</FieldTitle>
                        <EntrySingleLine>{item.unitVolume * quantity}</EntrySingleLine>
                    </TextRow>

                    <FieldTitle>DESCRIPTION</FieldTitle>
                    <EntryMultiLine> {item.description} </EntryMultiLine>
                </TextColumn>
            </RecordContainer>

        </ShadowBox >

    )
}