import { useDispatch } from "react-redux";
import styled, { StyledComponent } from "styled-components"
import { theme } from "../../../css/theme";


const CloseButtonDiv = styled.button`
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
    /* color: ${theme.button_TextColor}; */

    width: 14px;
    height: 14px;

    box-shadow: 0px 0px 0px 0.5px ${theme.button_BoxShadow};
    
    margin: 0px 5px;
    background-color: ${theme.button_BackgroundColor};

    transition-duration: 0.4s;
    
    &:hover {
        background-color: ${theme.button_BackgroundColor_Hover};
        color: ${theme.button_TextColor_Hover};
    }
`

const CloseButtonDiv_Caution = styled(CloseButtonDiv)`
        &:hover {
        background-color: ${theme.button_BackgroundColor_Hover_Warning};
        color: ${theme.button_TextColor_Hover_Warning};
    }
`

export interface CloseButtonProps {
    onClick: () => any;
    buttonModifier?: string;
    children?: React.ReactNode;
}

export const CloseButton: React.FC<CloseButtonProps> = ({ onClick, buttonModifier, children }) => {

    let CloseButton: StyledComponent<"button", any, {}, never>;
    if(buttonModifier === 'caution')
        CloseButton = CloseButtonDiv_Caution;
    else
        CloseButton = CloseButtonDiv;

    return (
        <>
            <CloseButton onClick={() => onClick()}>
                {children}
            </CloseButton>
        </>
    )
}