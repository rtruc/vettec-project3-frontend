import { useSelector } from "react-redux";
import { List } from "../components/List/List";
import { List_Alt } from "../components/List/List_Alt";
import { State } from "../redux/state";
import {todoFilter} from "../util/todoFilters"


export const Inventory = () => {

    const filters = useSelector((state: State) => state.filters);    
    // filters.set("pageFilter", todoFilter);
    
    // console.log("Todo: ", filters);

    return (
        <>
        {/* <List /> */}
        <List_Alt />      
        </>

    );
} 