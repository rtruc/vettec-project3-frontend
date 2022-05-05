import { useSelector } from "react-redux";
import { List } from "../components/List/List";
import { State } from "../redux/state";
import {allFilter} from "../util/filters"


export const All = () => {

    // const filters = useSelector(state => state.filters);    
    // filters.pageFilter = allFilter;
    const filters = useSelector((state: State) => state.filters);    
    filters.set("pageFilter", allFilter);

    return (
            <List />
    );
}