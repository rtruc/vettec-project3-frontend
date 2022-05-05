import { useDispatch } from "react-redux";
import styled from "styled-components";
import { editTitle } from "../../redux/actions/actions";
import { theme } from "../../util/theme";
import { TaskBoxProps } from "./TaskBox";


const DefaultTitleDiv = styled.input.attrs({type: 'text'})`
    background-color: inherit;
    border:none;
    font-family: inherit;
    font-size:1.45em;
    font-weight:900;
    color: ${theme.task_TextColor};

    &::placeholder {
        color: ${theme.task_PlaceholderText};
    }

    &:focus {
        outline: none;
    }
`

const NewTitleDiv = styled(DefaultTitleDiv)`
    color:${theme.task_PlaceholderText};
`


export const Title: React.FC<TaskBoxProps> = ({task}) => {

    // console.log(currentDate);
    const {title, _id} = task;

    const dispatch = useDispatch();
    let TitleDiv;

    if(title === "New Task") {
        TitleDiv = NewTitleDiv;
    } else {
        TitleDiv = DefaultTitleDiv;
    }

    return (
        <TitleDiv defaultValue={title} 
        onBlur={e => dispatch(editTitle(_id, e.target.value))} 
        // onChange={e => dispatch(editTitle(_id, e.target.value))} 
        />
    )
}