import { useSelector } from "react-redux";
import { AddItemDisplayCard } from "../components/InventoryItem/ItemDisplayCard_Add";
import { ItemDisplayCard } from "../components/InventoryItem/ItemDisplayCard_Large";
import { InventoryList } from "../components/List/InventoryList";
import { State } from "../redux/state";
// import { newRecord } from "../util/inventoryTestData";


export const InventoryPage = () => {

    const {activeRecord, mode} = useSelector((state: State) => state);

    return (
        <>
            {activeRecord && mode === "DISPLAY_RECORD" ? <ItemDisplayCard record={activeRecord}/> :  
                                                          null}
            {/* {mode === "ADD_RECORD" ? <AddItemDisplayCard record={newRecord} /> :   */}
                                      {/* null} */}
            <InventoryList />

        </>
    );
} 