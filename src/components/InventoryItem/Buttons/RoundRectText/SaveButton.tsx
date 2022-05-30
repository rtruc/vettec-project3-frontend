import React from "react";
import styled from "styled-components";
import { theme } from "../../../../css/theme";


const SaveButtonDiv = styled.button`
    margin-top:10px;
    margin-left:10px;
    margin-right:10px;
    
    cursor: pointer;

    background-color: ${theme.button_BackgroundColor};
    transition-duration: 0.4s;
    &:hover {
        background-color: ${theme.button_BackgroundColor_Hover};
        color: ${theme.button_TextColor_Hover};
    }

    border: none;
    border-radius: 5px;
    height: 25px;

    font:inherit;
`




export interface SaveButtonProps {
    clickEvent: () => void;
}

export const SaveButton: React.FC<SaveButtonProps> = ({clickEvent}) => {

    // const {activeRecord} = useSelector((state: State) => state);
 

    return (
        <>
            <SaveButtonDiv onClick = {clickEvent}>SAVE CHANGE</SaveButtonDiv>
        </>
    )
}