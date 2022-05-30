import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { theme } from "../../../../css/theme";
import { cancelChange, deleteCurrentItem } from "../../../../redux/actions/actions";


const CancelButtonDiv = styled.button`
    margin-top:10px;
    margin-left:10px;
    margin-right:10px;

    cursor: pointer;


    background-color: ${theme.button_BackgroundColor};
    transition-duration: 0.4s;
    &:hover {
        background-color: ${theme.button_BackgroundColor_Hover_Warning};
        color: ${theme.button_TextColor_Hover_Warning};
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
            <CancelButtonDiv onClick={() => dispatch(cancelChange())}>CANCEL</CancelButtonDiv>
        </>
    )
}