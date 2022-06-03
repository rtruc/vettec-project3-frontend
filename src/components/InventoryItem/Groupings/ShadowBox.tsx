import styled from "styled-components";

export const ShadowBox = styled.div`
    background:rgba(0, 0, 0, 0.455);

    position: fixed;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;

    z-index:10;

    pointer-events: none;
    transition: background-color 0.25s ease-in-out;

    pointer-events: fill;
`