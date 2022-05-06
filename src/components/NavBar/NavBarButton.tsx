import styled from "styled-components";
import { theme } from "../../css/theme";


export const NavBarButton = styled.button`
    display:flex;
    justify-content: center;
    align-items: center;

    /* position: relative; */

    margin-left: 15px;

    cursor: pointer;

    border: none;

    font-size:30px;

    text-decoration: none;
    /* background-color: ${theme.navBar_BackgroundColor}; */
    background-color: transparent;
    color: ${theme.navbar_Text};

    transition: background-color .2s ease-out 100ms;

    /* HIGHLIGHTS PLUS SIGN LIKE PAGE LINKS */
    &:hover {
        background-color: ${theme.hover_Color};
    }
`;
