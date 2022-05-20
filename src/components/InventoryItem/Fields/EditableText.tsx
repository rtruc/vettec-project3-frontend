import { useDispatch } from "react-redux";
import styled from "styled-components";
import { theme } from "../../../css/theme";
// import { editTitle } from "../../../redux/actions/actions";


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

interface EditableTextProps {
    
}


export const EditableText: React.FC<EditableTextProps> = () => {

    // const {title, _id} = task;

    // const dispatch = useDispatch();
    // let TitleDiv;

    // if(title === "New Task") {
    //     TitleDiv = NewTitleDiv;
    // } else {
    //     TitleDiv = DefaultTitleDiv;
    // }

    return (
        <>
        </>
        // <TitleDiv defaultValue={title} 
        //         onBlur={e => dispatch(editTitle(_id, e.target.value))} 
        // />
    )
}