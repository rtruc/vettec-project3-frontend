import { useSelector } from "react-redux";
import { InventoryList } from "../components/List/InventoryList";
import { State } from "../redux/state";


export const InventoryPage = () => {

    const filters = useSelector((state: State) => state.filters);
    // filters.set("pageFilter", todoFilter);

    return (
        <>
            <InventoryList />
        </>
    );
} 