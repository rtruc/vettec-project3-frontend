import { dateFilter} from "../util/todoFilters";
import { inventoryFilter} from "../util/inventoryFilters";
import { Inventory } from "../model/inventory";
import { Warehouse } from "../model/warehouse";

// export type State = {
export interface State {
    inventory: Inventory[];
    warehouses: Warehouse[];
    filters: Map<string, inventoryFilter>;
    // dateRange: {earlier: string, later: string};
}

export const initialState: State = {
    inventory: [], 
    warehouses: [],
    filters: new Map<string, inventoryFilter>(),
    // dateRange: {earlier: "earlier", later: "later"}
}