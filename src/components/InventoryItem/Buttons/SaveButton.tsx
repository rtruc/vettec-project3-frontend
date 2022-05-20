import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { theme } from "../../../css/theme";
import { cancelChange, deleteCurrentItem, dismissLargeItemView } from "../../../redux/actions/actions";
import { State } from "../../../redux/state";
import { testAddItem } from "../../../util/inventoryTestData";


const SaveButtonDiv = styled.button`
    margin-top:10px;
    margin-left:10px;
    margin-right:10px;
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
    clickEvent: () => void;
}

export const SaveButton: React.FC<SaveButtonProps> = ({clickEvent}) => {

    // const {activeRecord} = useSelector((state: State) => state);
 

    return (
        <>
            <SaveButtonDiv onClick = {clickEvent}>SAVE CHANGE</SaveButtonDiv>
        </>
    )
}