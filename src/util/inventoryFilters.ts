import { Inventory } from "../model/inventory";

export interface inventoryFilter {
    (item: Inventory): boolean;
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