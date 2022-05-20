import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { theme } from "../../../css/theme";
import { deleteCurrentItem } from "../../../redux/actions/actions";
import { State } from "../../../redux/state";


const DeleteButtonDiv = styled.button`
    margin:10px;

    background-color: ${theme.deleteButton_BackgroundColor};
    transition-duration: 0.4s;
    &:hover {
        background-color: ${theme.deleteButton_BackgroundColor_Hover};
        color: ${theme.deleteButton_TextColor_Hover};
    }

    border: none;
    border-radius: 5px;
    height: 25px;

    font:inherit;
`

export interface DeleteButtonProps {

}

export const DeleteButton: React.FC<DeleteButtonProps> = () => {

    const {activeRecord} = useSelector((state: State) => state);
    const dispatch = useDispatch();

    const deleteButtonClicked = () => {
        axios.delete(`${process.env.REACT_APP_REST_URL}/inventories/${activeRecord?.inventoryID}`)
             .then(({data}) => dispatch(deleteCurrentItem(data)))
             .catch( error => console.log("DELETE FAILED: ", error));
    }

    return (
        <>
            <DeleteButtonDiv onClick={() => deleteButtonClicked()}>DELETE ITEM</DeleteButtonDiv>
        </>
    )
}