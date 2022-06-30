import styled from "styled-components";
import { theme } from "../../../css/theme";

export const DropDownMenu = styled.select`
    height: 25px;

    padding-left: 5px;
    padding-right: 5px;

    border-radius: 5px;

    font-family: 'Lato', sans-serif;

    border: none;

    background-color:${theme.item_BackgroundColor_lighter};
    /* background-color:purple; */

    &:focus {
        outline: none;
    }
    transition: outline 125ms;
    &:hover {
        outline: 0.15em solid ${theme.button_TextColor_Hover_NavBar};
    }
`