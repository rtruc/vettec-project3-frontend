import { inventoryFilter} from "../util/inventoryFilters";
import { Inventory } from "../model/inventory";
import { Warehouse } from "../model/warehouse";
import { Brand } from "../model/brand";
import { Item } from "../model/item";
// import { Company } from "../model/company";

export interface State {
    inventory: Inventory[];
    warehouses: Warehouse[];
    items: Item[];
    brands: Brand[];
    // companies: Company[];
    locations: Location[];

    currentWarehouse: Warehouse | null;
    activeRecord: Inventory | null;
    mode: string;

    filters: Map<string, inventoryFilter>;
}

export const initialState: State = {
    inventory: [], 
    warehouses: [],
    items: [],
    brands: [],
    // companies: [],
    locations: [],

    currentWarehouse: null,
    activeRecord: null,
    mode: "",

    filters: new Map<string, inventoryFilter>(),
}