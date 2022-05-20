import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { theme } from "../../../css/theme";
import { cancelAddItem, deleteCurrentItem } from "../../../redux/actions/actions";
import { State } from "../../../redux/state";


const CancelButtonDiv = styled.button`
    margin-top:10px;
    margin-left:10px;
    margin-right:10px;

    cursor: pointer;


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

export interface CancelButtonProps {

}

export const CancelButton: React.FC<CancelButtonProps> = () => {

    // const {activeRecord} = useSelector((state: State) => state);
    const dispatch = useDispatch();


    return (
        <>
            <CancelButtonDiv onClick={() => dispatch(cancelAddItem())}>CANCEL</CancelButtonDiv>
        </>
    )
}