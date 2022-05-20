import styled from "styled-components"
import { theme } from "../../../css/theme";


const ButtonDiv = styled.button`
    cursor: pointer;

    position:absolute;
    top: 5px;
    right: 5px;

    display: flex;
    align-items: center;
    justify-content: center;

    border: none;
    border-radius: 10px;

    font-weight: 100;
    font-size: 10px;
    color: ${theme.deleteButton_TextColor};

    width: 14px;
    height: 14px;

    box-shadow: 0px 0px 0px 0.5px ${theme.deleteButton_BoxShadow};
    
    margin: 0px 5px;
    background-color: ${theme.deleteButton_BackgroundColor};

    transition-duration: 0.4s;
    
    &:hover {
        background-color: ${theme.button_BackgroundColor_Hover};
        color: ${theme.deleteButton_TextColor_Hover};
    }
`

export interface ButtonProps {
    clickEvent: () => {};
}

export const Button: React.FC<ButtonProps> = ({clickEvent}) => {

    return (
        <>
            <ButtonDiv onClick = {clickEvent}>X</ButtonDiv> 
        </>
    )
}