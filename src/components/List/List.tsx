import styled from "styled-components";
import { useSelector } from "react-redux";
import { State } from "../../redux/state";
import { todoFilter } from "../../util/todoFilters";
import { Task } from "../../model/task";
import { TaskBox } from "../_archived/Todo/TodoItem";

const ListDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    
    padding-top: 50px;
    padding-bottom: 60px;
`

export const List: React.FC = () => {

    // const { tasks, filters } = useSelector((state: State) => state);    
    const { filters } = useSelector((state: State) => state);    

    // let workingSet:  Task[] = tasks;
    let filteredSet: Task[] = [];

    // filters.forEach((filter: todoFilter) => {
        // filteredSet = [];
        // filteredSet.push(...workingSet.filter(task => filter(task)));
        // workingSet = filteredSet;

    // } )

    return (
        <ListDiv>
            {filteredSet.map((task) => {
                return (
                    <TaskBox key={task._id} task={task} />
                )
            })}
        </ListDiv>
    );

}
