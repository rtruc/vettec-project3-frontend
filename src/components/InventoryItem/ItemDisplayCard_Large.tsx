import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import { Inventory } from "../../model/inventory";
import { deleteCurrentItem, dismissInventoryCard, updateInventoryQuantity } from "../../redux/actions/actions";
import { CloseButton } from "../Generics/Buttons/CloseButton";
import { RoundRectButton } from "../Generics/Buttons/RoundRectButton";
import { RecordContainer } from "./Groupings/RecordContainer";
import { ShadowBox } from "./Groupings/ShadowBox";
import { TextColumn } from "./Groupings/TextColumn";
import { TextRow } from "./Groupings/TextRow";
import { DateField } from "./Fields/DatePicker";
import { ImageColumn } from "./Fields/ImageColumn";
import { NumberInput } from "./Fields/Number";
import { TextInput } from "./Fields/TextInput";
import { EntryMultiLine } from "./Fields/EntryMultiLine";
import { FieldTitle } from "./Fields/FieldTitle";
import { ItemImage } from "./Fields/ItemImage";

const baseURL = `${process.env.REACT_APP_PHOTO_URL}/`

export interface ItemDisplayCardProps {
    record: Inventory;
}

export const ItemDisplayCard: React.FC<ItemDisplayCardProps> = ({ record }) => {

    const { item, quantity, inventoryDate } = record;

    let displayedQuantity: number | string = quantity;

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
                        <TextInput disabled defaultValue={item.itemName} />
                    </TextRow>

                    <TextRow>
                        <FieldTitle>{item.itemType === 'book' ? "AUTHOR: " : "BREWERY: "} </FieldTitle>
                        <TextInput disabled defaultValue={item.brand.brandName} />
                    </TextRow>

                    <TextRow>
                        <FieldTitle>QUANTITY: </FieldTitle>
                        <NumberInput onChange={(e) => displayedQuantity = e.target.value} defaultValue={displayedQuantity} />
                    </TextRow>

                    <TextRow>
                        <FieldTitle>SIZE: </FieldTitle>
                        <NumberInput disabled defaultValue={item.unitVolume} />
                    </TextRow>

                    <TextRow>
                        <FieldTitle>TOTAL SPACE: </FieldTitle>
                        <NumberInput disabled defaultValue={item.unitVolume * quantity} />
                    </TextRow>

                    <TextRow>
                        <FieldTitle>{item.itemType === 'book' ? "PUBLISHED: " : "EXPIRATION: "} </FieldTitle>
                        <DateField isDisabled={true} date={inventoryDate} />
                    </TextRow>

                    {/* <LargeTextInput disabled value={item.description} /> */}
                    <FieldTitle>DESCRIPTION</FieldTitle>
                    <EntryMultiLine> {item.description} </EntryMultiLine>

                </TextColumn>
            </RecordContainer>

        </ShadowBox>

    )
}