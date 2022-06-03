import styled from "styled-components";
import { theme } from "../../../css/theme";

export const RecordContainer = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    margin-top: -200px;
    margin-left: -400px;
    width: 800px;
    height: 400px;

    z-index: 11;

    display:flex;
    flex-direction: row;
    align-items:flex-start;

    font-size:20px;
    
    background-color: ${theme.item_BackgroundColor};
    
    // WEBKIT DOESN'T APPLY BORDER-RADIUS TO OUTLINES...
    // USING HARD DROP SHADOW INSTEAD
    border-radius:10px;
    box-shadow: 0 0 0 .75pt ${theme.item_BorderShadowColor};
`