import styled from "styled-components";
import { theme } from "../../../css/theme";


export const NumberInput = styled.input.attrs({ type: 'number' })`
background-color: inherit;
border: none;
cursor: pointer;
font-size:inherit;

background-color:${theme.item_BackgroundColor_lighter};
border-radius:3px;

width: 80px;
font-family: 'Lato', sans-serif;
:disabled{
    color:black;
}
::-webkit-inner-spin-button{
    opacity: 1;
    /* background-color: purple; */
}
`