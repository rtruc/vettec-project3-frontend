import styled from "styled-components";

export const TextInput = styled.input.attrs({ type: 'text' })`
    background-color: inherit;
    border: none;
    /* cursor: pointer; */

    font-family: inherit;
    font-size:inherit;

    display:flex;
    flex-grow:100;
    max-width:160px;
    :disabled {
        color: black;
    }
`