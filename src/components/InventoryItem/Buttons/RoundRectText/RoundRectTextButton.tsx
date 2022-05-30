import styled from "styled-components";
import { theme } from "../../../../css/theme";

export const CancelButtonDiv = styled.button`
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