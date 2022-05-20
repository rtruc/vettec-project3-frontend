import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { theme } from "../../../css/theme";
import { cancelAddItem, deleteCurrentItem } from "../../../redux/actions/actions";
import { State } from "../../../redux/state";


const SaveButtonDiv = styled.button`
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

export interface SaveButtonProps {

}

export const SaveButton: React.FC<SaveButtonProps> = () => {

    // const {activeRecord} = useSelector((state: State) => state);
    const dispatch = useDispatch();


    return (
        <>
            <SaveButtonDiv onClick={() => dispatch(cancelAddItem())}>SAVE</SaveButtonDiv>
        </>
    )
}