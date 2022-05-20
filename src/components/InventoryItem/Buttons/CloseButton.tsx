import { useDispatch } from "react-redux";
import styled from "styled-components"
import { theme } from "../../../css/theme";
import { cancelChange } from "../../../redux/actions/actions";


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
    color: ${theme.deleteButton_TextColor};

    width: 14px;
    height: 14px;

    box-shadow: 0px 0px 0px 0.5px ${theme.deleteButton_BoxShadow};
    
    margin: 0px 5px;
    background-color: ${theme.deleteButton_BackgroundColor};

    transition-duration: 0.4s;
    
    &:hover {
        background-color: ${theme.button_BackgroundColor_Hover};
        color: ${theme.button_TextColor_Hover};
    }
`

export interface CloseButtonProps {
}

export const CloseButton: React.FC<CloseButtonProps> = () => {
    const dispatch = useDispatch();

    return (
        <>
            <CloseButtonDiv onClick={() => dispatch(cancelChange())}>X</CloseButtonDiv> 
        </>
    )
}