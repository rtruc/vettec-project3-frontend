import { useDispatch } from "react-redux";
import styled from "styled-components";
import { editDate } from "../../redux/actions/actions";
import { convertDateToHTMLCompliantString, convertDateToJSONCompliantString, discardTime } from "../../util/data";
import { theme } from "../../util/theme";
import { TaskBoxProps } from "./TaskBox";

const StandardDueDateDiv = styled.input.attrs({type: 'date'})`
    background-color: inherit;
    border: none;
    cursor: pointer;

    font-family: 'Lato', sans-serif;

    color: ${theme.task_TextColor};


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

const OverdueDateDiv = styled(StandardDueDateDiv)`
    color: ${theme.task_TextColor_Overdue};
`

export const DueDate: React.FC<TaskBoxProps> = ({task, currentDate}) => {

    const {date, isComplete, _id} = task;
    const currentDateUnwrapped = currentDate || "";
    const dispatch = useDispatch();


    let DueDateDiv;

    // STYLE TEXT BASED UPON DUE TIME STATUS
    if(isComplete === false && discardTime(currentDateUnwrapped) > discardTime(date)) {
        DueDateDiv = OverdueDateDiv;
    } else {
        DueDateDiv = StandardDueDateDiv;
    }

    return (
            <DueDateDiv required defaultValue={convertDateToHTMLCompliantString(date)} 
                        onBlur={e => dispatch(editDate(_id, e.target.value))}
            />
    )
}