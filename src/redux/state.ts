import { inventoryFilter} from "../util/inventoryFilters";
import { Inventory } from "../model/inventory";
import { Warehouse } from "../model/warehouse";
import { Brand } from "../model/brand";

export interface State {
    inventory: Inventory[];
    warehouses: Warehouse[];
    // brands: Brand[];
    currentWarehouse: Warehouse | null;
    activeRecord: Inventory | null;
    mode: string;
    filters: Map<string, inventoryFilter>;
}

export const initialState: State = {
    inventory: [], 
    warehouses: [],
    // brands: [],
    currentWarehouse: null,
    activeRecord: null,
    mode: "",
    filters: new Map<string, inventoryFilter>(),
}