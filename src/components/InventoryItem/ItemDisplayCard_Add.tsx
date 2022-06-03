import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dismissInventoryCard, updateInventory, updateItems } from "../../redux/actions/actions";
import { convertDateToHTMLCompliantString } from "../../util/taskData";
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

const baseURL = `${process.env.REACT_APP_PHOTO_URL}/`

export interface AddItemDisplayCard {
    
}

export const AddItemDisplayCard: React.FC<AddItemDisplayCard> = () => {
    const dispatch = useDispatch();
    const { items } = useSelector((state: State) => state)

    const cancelClicked = () => dispatch(dismissInventoryCard());

    function addClicked(): void {
        const newItem = testAddItem;

        axios.post(`${process.env.REACT_APP_REST_URL}/inventories/`, newItem)
             .then(() => 
                axios.get(`${process.env.REACT_APP_REST_URL}/warehouses/${newItem.warehouse.warehouseID}`)
                    .then(({ data }) => dispatch(updateInventory(data)))
                    .catch(() => console.log("UPDATE INVENTORY FAILED")))
            .then(() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }))
            .then(() => dispatch(dismissInventoryCard()))
            .catch(() => console.log("POST FAILED"))
    }




    // TODO: GET LIST OF ITEMS
    // BUILD DROPDOWN MENU
    // UPDATE FIELDS BASED UPON SELECTED ITEM
    // BUILD AND SEND INVENTORY RECORD WHEN ADD CLICKED

    let [item, setItem] = useState(blankItem)
    let [quantity, setQuantity] = useState(0);

    return (
        <ShadowBox>

            <RecordContainer>

                <ImageColumn>
                    <ItemImage alt={"BEER"} src={baseURL + item.imageURL} />
                    <RoundRectButton onClick={addClicked}> ADD </RoundRectButton>
                    <RoundRectButton onClick={cancelClicked} buttonModifier="caution"> CANCEL </RoundRectButton>
                </ImageColumn>

                <TextColumn>
                    <TextRow>
                        <FieldTitle>ITEM:</FieldTitle>
                        {/* <TextInput defaultValue="" /> */}
                        <DropDownMenu onChange={({ target }) => setItem(items.find(i => i.itemID === parseInt(target.value)) || blankItem)}>
                            <option value={""}></option>
                            {items.map((i) => {
                                return (
                                    <option key={i.itemID}
                                        value={i.itemID}>
                                        {i.itemName}
                                    </option>
                                )
                            })}
                        </DropDownMenu>
                    </TextRow>

                    <TextRow>
                        <FieldTitle>{item.itemType === 'book' ? "AUTHOR: " : "BREWERY: "} </FieldTitle>
                        <TextInput disabled defaultValue={item.brand.brandName} />
                    </TextRow>

                    <TextRow>
                        <FieldTitle>QUANTITY: </FieldTitle>
                        <NumberInput onChange={(e) => setQuantity(parseInt(e.target.value))}
                            defaultValue={quantity} />
                        {/* <NumberInput onChange={(e) => quantity = e.target.value}
                            defaultValue="0" /> */}
                    </TextRow>

                    <TextRow>
                        <FieldTitle>SIZE:</FieldTitle>
                        <EntryMultiLine>{item.unitVolume}</EntryMultiLine>
                    </TextRow>

                    <TextRow>
                        <FieldTitle>TOTAL SPACE:</FieldTitle>
                        <EntryMultiLine>{item.unitVolume * quantity}</EntryMultiLine>

                    </TextRow>

                    <TextRow>
                        <FieldTitle>EXPIRATION:</FieldTitle>
                        <DateField date={convertDateToHTMLCompliantString(new Date())} />
                    </TextRow>

                    <FieldTitle>DESCRIPTION</FieldTitle>
                    {/* <LargeTextInput disabled value={item.description} /> */}
                    <EntryMultiLine> {item.description} </EntryMultiLine>
                </TextColumn>
            </RecordContainer>

        </ShadowBox >

    )
}