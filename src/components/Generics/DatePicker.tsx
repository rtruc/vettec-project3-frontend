import { useDispatch } from "react-redux";
import styled from "styled-components";
import { editDate } from "../../redux/actions/actions";
import { convertDateToHTMLCompliantString, convertDateToJSONCompliantString, discardTime } from "../../util/taskData";
import { Task } from "../../model/task";
import { theme } from "../../css/theme";

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

interface DueDateProps {
    task: Task;
    currentDate: string;
    changedDueDate: (newDate:string) => {};
}

export const DatePicker: React.FC<DueDateProps> = ({task, currentDate, changedDueDate}) => {

    const {date, isComplete, _id} = task;
    let DueDateDiv;

    // STYLE TEXT BASED UPON DUE TIME STATUS
    if(isComplete === false && discardTime(currentDate) > discardTime(date)) {
        DueDateDiv = OverdueDateDiv;
    } else {
        DueDateDiv = StandardDueDateDiv;
    }

    return (
            <DueDateDiv required defaultValue={convertDateToHTMLCompliantString(date)} 
                        onBlur={e => changedDueDate(e.target.value)}
            />
    )
}