import { useSelector } from "react-redux";
import { AddItemDisplayCard } from "../components/InventoryItem/AddItemDisplayCard";
import { ItemDisplayCard } from "../components/InventoryItem/ItemDisplayCard";
import { InventoryList } from "../components/List/InventoryList";
import { State } from "../redux/state";


export const InventoryPage = () => {

    const {filters, inventory, activeRecord, mode} = useSelector((state: State) => state);
    // filters.set("pageFilter", todoFilter);
    
    // console.log("MODE:", mode)

    return (
        <>

            {activeRecord && mode === "DISPLAY_RECORD" ? <ItemDisplayCard record={activeRecord}/> :  
                                                          null}
            {mode === "ADD_RECORD" ? <AddItemDisplayCard /> :  
                            null}
            <InventoryList />

        </>
    );
} 