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
//     // return function(task: Task) {
//     //     return earlier <= task.date && task.date <= later;
//     // }
// }