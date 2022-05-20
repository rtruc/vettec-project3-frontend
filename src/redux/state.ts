import { inventoryFilter} from "../util/inventoryFilters";
import { Inventory } from "../model/inventory";
import { Warehouse } from "../model/warehouse";
import { Company } from "../model/company";
import { Brand } from "../model/brand";

// export type State = {
export interface State {
    inventory: Inventory[];
    warehouses: Warehouse[];
    brands: Brand[];
    currentWarehouse: Warehouse | null;
    activeRecord: Inventory | null;
    mode: string;
    filters: Map<string, inventoryFilter>;
    // dateRange: {earlier: string, later: string};
}

export const initialState: State = {
    inventory: [], 
    warehouses: [],
    brands: [],
    
    // currentlySelectedWarehouse: new Warehouse(0, "", new Location(0, "", "", ""), 0),
    currentWarehouse: null,
    activeRecord: null,
    mode: "",
    filters: new Map<string, inventoryFilter>(),
    // dateRange: {earlier: "earlier", later: "later"}
}