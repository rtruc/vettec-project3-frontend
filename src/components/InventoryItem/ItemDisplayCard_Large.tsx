import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Inventory } from "../../model/inventory";
import { deleteCurrentItem, dismissInventoryCard, updateInventoryQuantity } from "../../redux/actions/actions";
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

const baseURL = `${process.env.REACT_APP_PHOTO_URL}/`

export interface ItemDisplayCardProps {
    record: Inventory;
}

export const ItemDisplayCard: React.FC<ItemDisplayCardProps> = ({ record }) => {

    const { item, quantity } = record;

    let [displayedQuantity, setDisplayedQuantity] = useState(quantity);

    const dispatch = useDispatch();

    const closeClicked = () => dispatch(dismissInventoryCard())

    const saveClicked = () => {
        if(displayedQuantity !== quantity) {
            let duplicate = JSON.parse(JSON.stringify(record));
            duplicate.quantity = displayedQuantity;
            console.log(JSON.stringify(duplicate));

            axios.put(`${process.env.REACT_APP_REST_URL}/inventories/${record.inventoryID}`, duplicate)
                 .then(() => dispatch(updateInventoryQuantity(record.inventoryID, duplicate.quantity)))
                 .catch(error => console.log("FAILED UPDATING QUANTITY: ", error ))
        } else {
            dispatch(dismissInventoryCard())
        }
    }

    const deleteClicked = () => {
        axios.delete(`${process.env.REACT_APP_REST_URL}/inventories/${record.inventoryID}`)
             .then(({data}) => dispatch(deleteCurrentItem(data)))
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