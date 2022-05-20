import styled from "styled-components";
import { theme } from "../../../css/theme";


export const NavBarButton = styled.button`
    display:flex;
    justify-content: center;
    align-items: center;

    height: 50px;
    /* height: inherit; */

    /* position: relative; */

    /* margin-left: 15px; */
    padding-left: 10px;
    padding-right: 10px;

    cursor: pointer;

    border: none;

    font-size:30px;

    text-decoration: none;
    /* background-color: ${theme.navBar_BackgroundColor}; */
    background-color: transparent;
    color: ${theme.navbar_Text};

    transition: all .2s ease-out 100ms;

    /* HIGHLIGHTS PLUS SIGN LIKE PAGE LINKS */
    &:hover {
        /* background-color: ${theme.hover_Color}; */
        color: ${theme.hover_Color};
    }
`;
