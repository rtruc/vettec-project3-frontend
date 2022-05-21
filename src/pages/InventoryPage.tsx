import { useSelector } from "react-redux";
import { AddItemDisplayCard } from "../components/InventoryItem/AddItemDisplayCard";
import { ItemDisplayCard } from "../components/InventoryItem/ItemDisplayCard";
import { InventoryList } from "../components/List/InventoryList";
import { State } from "../redux/state";


export const InventoryPage = () => {

    const {activeRecord, mode} = useSelector((state: State) => state);

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