import styled from "styled-components";
import { theme } from "../../../css/theme";

const DueDateDiv = styled.input.attrs({ type: 'date' })`
    background-color: inherit;
    border: none;
    /* cursor: pointer; */

    font-family: 'Lato', sans-serif;
    font-size:inherit;

    color: ${theme.textColor_Dark};

    height: 20px;


    // HIDES DATE PICKER CALENDAR ICON
    &::-webkit-calendar-picker-indicator{
        display: none;
    }
    &::-webkit-input-placeholder{ 
        visibility: hidden !important;
    }

    &:focus {
        outline:none;
    }
`

interface DateProps {
    date: string;
    isDisabled?: boolean;
}

export const DateField: React.FC<DateProps> = ({ date, isDisabled = false }) => {

    return (
        <>
            {isDisabled ? <DueDateDiv required disabled defaultValue={date} /> :
                          <DueDateDiv required defaultValue={date} />}
        </>
    )
}