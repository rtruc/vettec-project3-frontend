import { useDispatch } from "react-redux";
import styled from "styled-components";
import { editDate } from "../../../redux/actions/actions";
import { convertDateToHTMLCompliantString, convertDateToJSONCompliantString, discardTime } from "../../../util/taskData";
import { Task } from "../../../model/task";
import { theme } from "../../../css/theme";

const DueDateDiv = styled.input.attrs({type: 'date'})`
    background-color: inherit;
    border: none;
    /* cursor: pointer; */

    font-family: 'Lato', sans-serif;
    font-size:inherit;

    color: ${theme.task_TextColor};

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
    // changedDueDate: (newDate:string) => {};
}

export const DateField: React.FC<DateProps> = ({date, isDisabled = false}) => {

    // const {date, isComplete, _id} = task;
    // let DueDateDiv;

    // STYLE TEXT BASED UPON DUE TIME STATUS

    return (
            // <DueDateDiv required defaultValue={convertDateToHTMLCompliantString(date)} 
            //             onBlur={e => changedDueDate(e.target.value)}/> 
            <>
            {isDisabled ? <DueDateDiv required disabled defaultValue={date}/> : <DueDateDiv required defaultValue={date}/> }
            </>
            // <DueDateDiv required defaultValue={date}/> 
    )
}