import { useSelector } from "react-redux";
import { ItemDisplayCard } from "../components/InventoryItem/ItemDisplayCard";
import { InventoryList } from "../components/List/InventoryList";
import { State } from "../redux/state";


export const InventoryPage = () => {

    const {filters, inventory, activeRecord} = useSelector((state: State) => state);
    // filters.set("pageFilter", todoFilter);
    

    return (
        <>
            {activeRecord ? <ItemDisplayCard record={activeRecord}/> :  
                            null}
            <InventoryList />

        </>
    );
} 