import { useSelector } from "react-redux";
import { List } from "../components/List/List";
import { State } from "../redux/state";
import {completedFilter} from "../util/filters"


export const Completed = () => {
    
    // const filters= useSelector(state => state.filters);    
    // filters.pageFilter = completedFilter;
    const filters = useSelector((state: State) => state.filters);    
    filters.set("pageFilter", completedFilter);

    return (
            <List />
    );
} 