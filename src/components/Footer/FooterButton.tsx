import styled from "styled-components";
import { theme } from "../../css/theme";


export const FooterButton = styled.button`
    display:flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;

    border: none;

    font-size:40px;

    text-decoration: none;
    background-color: inherit;
    color: ${theme.navbar_Text};

    transition: background-color .2s ease-out 100ms;

    &:hover {
        background-color: ${theme.hover_Color};
    }
`;
