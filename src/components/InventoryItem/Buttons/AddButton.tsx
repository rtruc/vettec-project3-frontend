import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { theme } from "../../../css/theme";
import { dismissLargeItemView, updateInventory } from "../../../redux/actions/actions";
import { testAddItem } from "../../../util/inventoryTestData";


const AddButtonDiv = styled.button`
    margin:10px;

    cursor: pointer;

    background-color: ${theme.deleteButton_BackgroundColor};
    transition-duration: 0.4s;
    &:hover {
        background-color: ${theme.saveButton_BackgroundColor_Hover};
        color: ${theme.deleteButton_TextColor_Hover};
    }

    border: none;
    border-radius: 5px;
    height: 25px;

    font:inherit;
`




export interface AddButtonProps {

}

export const AddButton: React.FC<AddButtonProps> = () => {

    const dispatch = useDispatch();

    function saveItem() : void {
        const newItem = testAddItem;

        axios.post(`${process.env.REACT_APP_REST_URL}/inventories/`, newItem)
        .then(() => axios.get(`${ process.env.REACT_APP_REST_URL}/warehouses/${newItem.warehouse.warehouseID}`)
                         .then(({data}) => dispatch(updateInventory(data)))
                         .catch(() => console.log("UPDATE INVENTORY FAILED")))
                         .then(() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }))
        .then(() => dispatch(dismissLargeItemView()))
        .catch(() => console.log("POST FAILED"))
    }

    return (
        <>
            <AddButtonDiv onClick={() => saveItem()}>ADD</AddButtonDiv>
        </>
    )
}