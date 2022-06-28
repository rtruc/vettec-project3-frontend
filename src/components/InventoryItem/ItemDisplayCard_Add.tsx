import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dismissInventoryCard, updateInventory } from "../../redux/actions/actions";
import { convertDateToHTMLCompliantString } from "../../util/dateHelpers";
import { DateField } from "./Fields/DatePicker";
import { testAddItem } from "../../util/inventoryTestData";
import { RoundRectButton } from "../Generics/Buttons/RoundRectButton";
import { DropDownMenu } from "../Generics/DropDownMenus/DropDownMenu";
import { State } from "../../redux/state";
import { blankItem } from "../../model/item";
import { NumberInput } from "./Fields/Number";
import { TextInput } from "./Fields/TextInput";
import { RecordContainer } from "./Groupings/RecordContainer";
import { ShadowBox } from "./Groupings/ShadowBox";
import { ImageColumn } from "./Fields/ImageColumn";
import { TextColumn } from "./Groupings/TextColumn";
import { TextRow } from "./Groupings/TextRow";
import { EntryMultiLine } from "./Fields/EntryMultiLine";
import { FieldTitle } from "./Fields/FieldTitle";
import { ItemImage } from "./Fields/ItemImage";
import { EntrySingleLine } from "./Fields/EntrySingleLine";
import { blankRecord } from "../../model/inventory";

const baseURL = `${process.env.REACT_APP_PHOTO_URL}/`

export interface AddItemDisplayCard {

}

export const AddItemDisplayCard: React.FC<AddItemDisplayCard> = () => {
    const dispatch = useDispatch();
    const { items } = useSelector((state: State) => state)

    const cancelClicked = () => dispatch(dismissInventoryCard());

    function addClicked(): void {
        let newRecord = blankRecord;
        newRecord.warehouse.warehouseID = currentWarehouse?.warehouseID || -1;
        newRecord.item.itemID = item.itemID;
        newRecord.quantity = quantity;


        if(item === blankItem || quantity < 1) {
            return;
        }

        axios.post(`${process.env.REACT_APP_REST_URL}/inventories/`, newRecord)
             .then(() =>
                axios.get(`${process.env.REACT_APP_REST_URL}/warehouses/${newRecord.warehouse.warehouseID}`)
                     .then(({ data }) => dispatch(updateInventory(data)))
                     .catch(() => console.log("UPDATE INVENTORY FAILED")))
             .then(() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }))
             .then(() => dispatch(dismissInventoryCard()))
             .catch(() => console.log("POST FAILED"))
    }

    // BUILD AND SEND INVENTORY RECORD WHEN ADD CLICKED

    let [item, setItem] = useState(blankItem)
    let [quantity, setQuantity] = useState(0);
    const {currentWarehouse} = useSelector((state: State) => state);

    return (
        <ShadowBox>

            <RecordContainer>

                <ImageColumn>
                    <ItemImage alt={"BEER"} src={baseURL + item.imageURL} />
                    <RoundRectButton onClick={addClicked}> ADD </RoundRectButton>
                    {/* <RoundRectButton onClick={() => {}}> ADD </RoundRectButton> */}
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