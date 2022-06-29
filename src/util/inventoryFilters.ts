import { InventoryRecord } from "../model/inventoryRecord";

export interface inventoryFilter {
    (item: InventoryRecord): boolean;
}

export function typeFilter(type:string): inventoryFilter {
    const typeFilter: inventoryFilter = (record) => {
        return record.item.itemType === type;
    }
    return typeFilter;
}

export function brandFilter(type:string): inventoryFilter {
    const brandFilter: inventoryFilter = (record) => {
        return record.item.brand.brandName === type;
    }

    return brandFilter;
}

export function textFilter(searchString: string): inventoryFilter {
    const txtFilter: inventoryFilter = (record) => {
        const searchGlob =  record.item.description.toLowerCase() + " " +
                            record.item.itemName.toLowerCase() + " " +
                            record.item.itemType.toLowerCase() + " " +
                            record.item.brand.brandName.toLowerCase();

        return searchGlob.includes(searchString);
    }
    return txtFilter;
}     