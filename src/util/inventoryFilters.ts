import { Inventory } from "../model/inventory";

export interface inventoryFilter {
    (item: Inventory): boolean;
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


// export const todoFilter: todoFilter      = (task) => task.isComplete === false;
// export const completedFilter: todoFilter = (task) => task.isComplete === true;
// export const allFilter: todoFilter       = (task) => true;

// export function dateFilter(earlier: string, later: string): todoFilter {
    
//     if (earlier > later) {
//         const swapper = later;
//         later = earlier;
//         earlier = swapper;
//     }

//     const dtFilter: todoFilter = (task) => earlier <= task.date && task.date <= later;
//     return dtFilter;
// }