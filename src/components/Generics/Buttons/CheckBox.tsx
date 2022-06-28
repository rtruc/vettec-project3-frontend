import styled from "styled-components";
import { theme } from "../../../css/theme";

export const CheckBoxDiv = styled.input.attrs({ type: 'checkbox' })`
    /* Add if not using autoprefixer */
    /* -webkit-appearance: none; */
    /* Remove most all native input styles */
    appearance: none;
    /* For iOS < 15 */
    background-color: white;
    /* Not removed via appearance */
    margin: 0;

    font: inherit;
    /* color: currentColor; */
    width: 1.15em;
    height: 1.15em;
    border: 0.075em solid grey;
    border-radius: 0.3em;
    transform: translateY(-0.075em);

    cursor:pointer;

    display: grid;
    place-content: center;

    &::before {
        content: "";
        width: 0.65em;
        height: 0.65em;
        clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
        transform: scale(0);
        transform-origin: center;
        transition: 120ms transform ease-in-out;
        box-shadow: inset 1em 1em var(--form-control-color);
        /* Windows High Contrast Mode */
        background-color: ${theme.active_Color};
    }

    &:checked::before {
        transform: scale(1);
    }

    &:focus {
        /* outline: max(2px, 0.15em) solid currentColor; */
        /* outline-offset: max(2px, 0.15em); */
    }
    
    transition: border 250ms;
    &:hover {
        border: 0.15em solid ${theme.button_TextColor_Hover_NavBar};
    }

    &:disabled {
        --form-control-color: var(--form-control-disabled);

        color: var(--form-control-disabled);
        cursor: not-allowed;
    }
    
    accent-color: ${theme.active_Color};
`

interface CheckBoxProps {
    clickEvent: (e: any) => {};
    isComplete?: boolean;
}

export const CheckBox: React.FC<CheckBoxProps> = ({clickEvent, isComplete}) => {

    return (
        <>
            {isComplete ? <CheckBoxDiv defaultChecked onClick={e => clickEvent(e)} /> :
                          <CheckBoxDiv onClick={e => clickEvent(e)}/>}
        </>
    )
}