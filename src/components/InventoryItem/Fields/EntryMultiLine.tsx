import styled from "styled-components";

export const EntryMultiLine = styled.div`
    margin-left: 15px;
    margin-right: 15px;
    max-height: 225px;
    overflow: scroll;
    scrollbar-width: none;
    ::-webkit-scrollbar{
        display:none;
    }
`