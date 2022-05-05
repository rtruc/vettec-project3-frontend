import styled from "styled-components";
import { useSelector } from "react-redux";
import { State } from "../../redux/state";
import { Filter } from "../../util/filters";
import { Task } from "../../util/task";
import { TaskBox } from "../TaskBox/TaskBox";

const ListDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    
    padding-top: 50px;
    padding-bottom: 60px;
`

export const List: React.FC = () => {

    const { tasks, filters } = useSelector((state: State) => state);    
    
    console.log("Tasks: ", tasks);


    let workingSet: Task[]  = tasks;
    let filteredSet: Task[] = [];

    filters.forEach((filter: Filter) => {
        filteredSet = [];
        filteredSet.push(...workingSet.filter(task => filter(task)));
        workingSet = filteredSet;

    } )

    // for (const f in filters) {
    //     filteredSet = [];
    //     const filter = filters.get(f);
    //     filteredSet.push(...workingSet.filter(task => filter(task)));
    //     workingSet = filteredSet;
    // }


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
