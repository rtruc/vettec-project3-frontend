import { click } from "@testing-library/user-event/dist/click";
import { useDispatch } from "react-redux";
import styled, { StyledComponent } from "styled-components";
import { deleteTask, editDate, toggleCompletionStatus } from "../../redux/actions/actions";
import { convertDateToJSONCompliantString, discardTime } from "../../util/data";
import { Task } from "../../model/task";
import { theme } from "../../css/theme";
import { CheckBox } from "../Common/CheckBox";
// import { CheckBox } from "../Common/CheckBox";
import { DueDate } from "./Date";
import { DeleteButton } from "./DeleteButton";
import { Title } from "./Title";

const TaskColumn = styled.div`
    display: flex;
    flex-direction: column;
`

const NormalTask = styled.div`
    display:flex;
    flex-direction: row;
    gap:5px;
    align-items:center;

    position:relative;
    
    background-color: ${theme.task_BackgroundColor};
    min-width: 300px;
    max-width: 60%;
    max-height: 100px;

    padding: 5px;

    transition: all 0.2s ease;
    
    // WEBKIT DOESN'T APPLY BORDER-RADIUS TO OUTLINES...
    // USING HARD DROP SHADOW INSTEAD
    border-radius:5px;
    box-shadow: 0 0 0 .75pt ${theme.task_BorderShadowColor};

    &:hover, &:focus{
        /* filter: saturate(1.95); */
        box-shadow: 0 0 0 1.75pt ${theme.task_BorderShadowColor_HoverFocus};
        /* transform: scale(1.025); */
    }
`

const OverdueTask = styled(NormalTask)`
        /* background-color: ${theme.task_Overdue_BackgroundColor}; */
        
        box-shadow: 0 0 0 .75pt ${theme.task_Overdue_BorderShadowColor};
        &:hover{
            box-shadow: 0 0 0 2.00pt ${theme.task_Overdue_BorderShadowColor_HoverFocus};
            filter: brightness(1.05);
        }
`

const CompletedTask = styled(NormalTask)`
    opacity: 40%;
    &:hover{
        opacity: 70%;
        box-shadow: 0 0 0 0pt ${theme.task_BorderShadowColor_HoverFocus};
        filter: contrast(1.05);
    }
`

export interface TaskProps {
    task: Task;
}

export const TaskBox: React.FC<TaskProps> = ({ task }) => {

    let currentDate = convertDateToJSONCompliantString(new Date());
    let TaskRowDiv: StyledComponent<"div", {}>;

    // CHANGE TASK FORMATTING BASED UPON COMPLETION/OVERDUE STATUS
    if (task.isComplete === true) {
        TaskRowDiv = CompletedTask;
    }
    else if (discardTime(task.date) >= discardTime(currentDate)) {
        TaskRowDiv = NormalTask;
    } else {
        TaskRowDiv = OverdueTask;
    }

    const dispatch = useDispatch();

    // CHANGED TASK EVENTS
    const clickedCompletionBox = () => dispatch(toggleCompletionStatus(task._id));
    const clickedDeleteButton = () => dispatch(deleteTask(task._id))
    const changedDueDate = (newDate: string) => dispatch(editDate(task._id, newDate))

    return (
        <TaskRowDiv>

            <CheckBox isComplete={task.isComplete} clickEvent={clickedCompletionBox} />
            <DeleteButton clickEvent={clickedDeleteButton} />

            <TaskColumn>
                <Title task={task} />
                <DueDate task={task} currentDate={currentDate}
                    changedDueDate={changedDueDate} />

            </TaskColumn>
        </TaskRowDiv>
    )
}