import styled from "styled-components";
import { theme } from "../../css/theme";

// TODO: THEME
// const hover_Color = 'rgb(235, 16, 246)';

export const Icon = styled.img`
    /* max-height: 35px; */
    max-height: 40px;
    display:flex;
    justify-content: center;
    /* margin-top: 5px; */

    & a:hover {
        background-color: ${theme.hover_Color};
        /* background-color: green; */
    } 
`