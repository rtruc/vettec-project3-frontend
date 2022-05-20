import { inventoryFilter} from "../util/inventoryFilters";
import { Inventory } from "../model/inventory";
import { Warehouse } from "../model/warehouse";

// export type State = {
export interface State {
    inventory: Inventory[];
    warehouses: Warehouse[];
    currentWarehouse: Warehouse | null;
    activeRecord: Inventory | null;
    filters: Map<string, inventoryFilter>;
    // dateRange: {earlier: string, later: string};
}

export const initialState: State = {
    inventory: [], 
    warehouses: [],
    // currentlySelectedWarehouse: new Warehouse(0, "", new Location(0, "", "", ""), 0),
    currentWarehouse: null,
    activeRecord: null,
    filters: new Map<string, inventoryFilter>(),
    // dateRange: {earlier: "earlier", later: "later"}
}