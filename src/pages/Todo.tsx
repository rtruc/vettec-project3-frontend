import { useSelector } from "react-redux";
import { List } from "../components/List/List";
import { State } from "../redux/state";
import {todoFilter} from "../util/filters"


export const Todo = () => {

    const filters = useSelector((state: State) => state.filters);    
    filters.set("pageFilter", todoFilter);
    
    console.log("Todo: ", filters);

    return (
            <List />
    );
} 