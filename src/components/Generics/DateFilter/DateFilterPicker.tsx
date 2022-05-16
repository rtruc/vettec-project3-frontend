import styled from "styled-components";
import { theme } from "../../../css/theme";


export const DateFilterPicker = styled.input.attrs({type: 'date'})`
    background-color: inherit;
    color: ${theme.navbar_Text};
    border: none;
    cursor: pointer;

    margin: 0px 0px;


    font-family: 'Lato', sans-serif;


    // HIDES DATE PICKER CALENDAR ICON
    &::-webkit-calendar-picker-indicator{
        display: none;
    }
    /* &::-webkit-input-placeholder{ 
        visibility: hidden !important;
    } */

    &:focus {
        outline:none;
    }
`