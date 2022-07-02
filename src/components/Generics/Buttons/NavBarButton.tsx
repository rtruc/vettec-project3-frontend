import styled from "styled-components";
import { theme } from "../../../css/theme";

export const NavBarButton_Inactive = styled.button`
    display:flex;
    justify-content: center;
    align-items: center;

    height: 50px;
    /* height: inherit; */

    /* position: relative; */

    /* margin-left: 15px; */
    padding-left: 10px;
    padding-right: 10px;


    border: none;

    font-size:30px;

    text-decoration: none;
    background-color: transparent;
    color: ${theme.textColor_Inactive};
`

export const NavBarButton = styled(NavBarButton_Inactive)`
    
    color: ${theme.textColor_Dark};
    cursor: pointer;

    transition: all .2s ease-out 100ms;
    &:hover {
        color: ${theme.button_TextColor_Hover_NavBar};
    }
`;