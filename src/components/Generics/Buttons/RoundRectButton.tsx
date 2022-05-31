import React from "react";
import styled, { StyledComponent } from "styled-components";
import { theme } from "../../../css/theme";


const RoundRectButtonDiv = styled.button`
    margin-top:10px;
    margin-left:10px;
    margin-right:10px;

    cursor: pointer;


    background-color: ${theme.button_BackgroundColor};
    transition-duration: 0.4s;
    &:hover {
        background-color: ${theme.button_BackgroundColor_Hover};
        color: ${theme.button_TextColor_Hover};
    }

    border: none;
    border-radius: 5px;
    height: 25px;

    font:inherit;
`

const RoundRectButtonDiv_Caution = styled(RoundRectButtonDiv)`
        &:hover {
        background-color: ${theme.button_BackgroundColor_Hover_Warning};
        color: ${theme.button_TextColor_Hover_Warning};
    }
`

export interface RoundRectButtonProps {
    onClick: () => any;
    buttonModifier?: string;
    children?: React.ReactNode;
}

export const RoundRectButton: React.FC<RoundRectButtonProps> = ({ onClick, buttonModifier, children }) => {

    let RoundRectButton: StyledComponent<"button", any, {}, never>;
    if(buttonModifier === 'caution')
        RoundRectButton = RoundRectButtonDiv_Caution;
    else
        RoundRectButton = RoundRectButtonDiv;

    return (
        <RoundRectButton onClick={() => onClick()}>
            {children}
        </RoundRectButton>
    )
}