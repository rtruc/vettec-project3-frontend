import { inventoryFilter} from "../util/inventoryFilters";
import { InventoryRecord } from "../model/inventoryRecord";
import { Warehouse } from "../model/warehouse";
import { Brand } from "../model/brand";
import { Item } from "../model/item";
// import { Company } from "../model/company";

export interface State {
    inventoryRecords: InventoryRecord[];
    warehouses: Warehouse[];
    items: Item[];
    brands: Brand[];
    // companies: Company[];
    locations: Location[];

    activeWarehouse: Warehouse | null;
    activeRecord: InventoryRecord | null;
    mode: string;

    filters: Map<string, inventoryFilter>;
}

export const initialState: State = {
    inventoryRecords: [], 
    warehouses: [],
    items: [],
    brands: [],
    // companies: [],
    locations: [],

    activeWarehouse: null,
    activeRecord: null,
    mode: "",

    filters: new Map<string, inventoryFilter>(),
}