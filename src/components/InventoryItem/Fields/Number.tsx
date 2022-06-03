import styled from "styled-components";


export const NumberInput = styled.input.attrs({ type: 'number' })`
background-color: inherit;
border: none;
/* cursor: pointer; */
font-size:inherit;

width: 80px;
font-family: 'Lato', sans-serif;
:disabled{
    color:black;
}
`