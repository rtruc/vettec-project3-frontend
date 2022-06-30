import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { InventoryRecord } from "../../model/inventoryRecord";
import { deleteStateInvRecord, dismissInventoryRecordCard, updateStateInvRecord } from "../../redux/actions/actions";
import { CloseButton } from "../Generics/Buttons/CloseButton";
import { RoundRectButton } from "../Generics/Buttons/RoundRectButton";
import { RecordContainer } from "./Groupings/RecordContainer";
import { ShadowBox } from "./Groupings/ShadowBox";
import { TextColumn } from "./Groupings/TextColumn";
import { TextRow } from "./Groupings/TextRow";
import { ImageColumn } from "./Fields/ImageColumn";
import { NumberInput } from "./Fields/Number";
import { EntryMultiLine } from "./Fields/EntryMultiLine";
import { FieldTitle } from "./Fields/FieldTitle";
import { ItemImage } from "./Fields/ItemImage";
import { EntrySingleLine } from "./Fields/EntrySingleLine";
import inventoryRecordService from "../../services/inventoryRecord.service";

const baseURL = `${process.env.REACT_APP_PHOTO_URL}/`

export interface ItemDisplayCardProps {
    record: InventoryRecord;
}

export const ItemDisplayCard: React.FC<ItemDisplayCardProps> = ({ record }) => {

    const { item, quantity } = record;

    let [displayedQuantity, setDisplayedQuantity] = useState(quantity);

    const dispatch = useDispatch();

    const closeClicked = () => dispatch(dismissInventoryRecordCard())

    const saveClicked = () => {
        if(displayedQuantity !== quantity) {
            record.quantity = displayedQuantity;

            inventoryRecordService.putInventoryRecordUpdate(record)
                 .then(() => dispatch(updateStateInvRecord(record)))
                 .then(() => dispatch(dismissInventoryRecordCard()))
                 .catch(error => console.log("FAILED UPDATING QUANTITY: ", error ))
        } else {
            dispatch(dismissInventoryRecordCard())
        }
    }

    const deleteClicked = () => {
        inventoryRecordService.deleteInventoryRecord(record.inventoryID)
             .then(() => dispatch(deleteStateInvRecord(record)))
             .then(() => dispatch(dismissInventoryRecordCard()))
             .catch( error => console.log("DELETE FAILED: ", error));
    }


    const imageURL = item.imageURL !== null ? baseURL + item.imageURL : 
                     item.itemType === "book" ? baseURL + "generic_book.jpg" : 
                                                baseURL + "generic_beer.jpg";

    return (
        <ShadowBox>

            <RecordContainer>
                <CloseButton onClick={closeClicked} buttonModifier="caution"> X </CloseButton>

                <ImageColumn>
                    <ItemImage alt={record.item.itemName} src={imageURL} />
                    <RoundRectButton onClick={saveClicked} > SAVE </RoundRectButton>
                    <RoundRectButton onClick={deleteClicked} buttonModifier="caution"> DELETE </RoundRectButton>
                </ImageColumn>

                <TextColumn>
                    <TextRow>
                        <FieldTitle>{item.itemType === 'book' ? "TITLE: " : "NAME: "} </FieldTitle>
                        <EntrySingleLine>{item.itemName}</EntrySingleLine>
                    </TextRow>

                    <TextRow>
                        <FieldTitle>{item.itemType === 'book' ? "AUTHOR: " : "BREWERY: "} </FieldTitle>
                        <EntrySingleLine>{item.brand.brandName}</EntrySingleLine>
                    </TextRow>

                    <TextRow>
                        <FieldTitle>SIZE: </FieldTitle>
                        <EntrySingleLine>{item.unitVolume}</EntrySingleLine>
                    </TextRow>

                    <TextRow>
                        <FieldTitle>QUANTITY: </FieldTitle>
                        <NumberInput onChange={(e) => setDisplayedQuantity(parseInt(e.target.value))} defaultValue={displayedQuantity} />
                    </TextRow>

                    <TextRow>
                        <FieldTitle>TOTAL SPACE: </FieldTitle>
                        <EntrySingleLine>{item.unitVolume * displayedQuantity}</EntrySingleLine>
                    </TextRow>

                    <FieldTitle>DESCRIPTION</FieldTitle>
                    <EntryMultiLine> {item.description} </EntryMultiLine>

                </TextColumn>
            </RecordContainer>

        </ShadowBox>

    )
}