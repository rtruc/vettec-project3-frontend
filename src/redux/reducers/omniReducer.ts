import { AnyAction } from "redux";
import { brandFilter, textFilter, typeFilter } from "../../util/inventoryFilters";
import { initialState } from "../state";
import { Inventory } from "../../model/inventory";


// TODO: REFACTOR - Split this monstrosity up

export const omniReducer = (state = initialState, action: AnyAction) => {

    switch (action.type) {

        case "UPDATE_INVENTORY": {
            state.inventory = action.inventory;
            return {...state};
        }

        case "UPDATE_WAREHOUSES": {
            state.warehouses = action.warehouses;
            return {...state};
        }

        case "UPDATE_ITEMS": {
            state.items = action.items;
            return {...state};
        }
        

        case "UPDATE_SELECTED_WAREHOUSE": {
            state.currentWarehouse = 
                            state.warehouses.find(warehouse => warehouse.warehouseID === action.warehouseID) 
                            || null;
            state.filters.clear();
            return {...state};
        }

        case "CLEAR_LOCAL_INVENTORY": {
            state.inventory = [];
            state.currentWarehouse = initialState.currentWarehouse;
            return {...state}
        }

        case "DISPLAY_LARGE_ITEM": {
            state.activeRecord = action.inventory;
            state.mode = "DISPLAY_RECORD";
            return {...state};
        }

        case "DISPLAY_ADD_ITEM": {
            state.mode = "ADD_RECORD";
            return {...state};
        }


        case "DISMISS_CARD": {
            state.mode = "";
            state.activeRecord = null;
            return {...state};
        }




        // case "ADD_INV_ITEM": {
        //     state.mode = "";
        //     console.log("Saved through the power of imagination");
        //     return {...state};
        // }

        case "DELETE_INV_ITEM": {
            if(state.activeRecord){
                const index = state.inventory.indexOf(state.activeRecord);
                state.inventory.splice(index, 1);
                state.activeRecord = null;
            }
            return {...state};
        }

        case "UPDATE_INV_QUANTITY": {
            if(state.activeRecord){
                const index = state.inventory.indexOf(state.activeRecord);
                state.inventory[index].quantity = action.quantity;
                state.activeRecord = null;
            }
            return {...state}
        }




        case 'UPDATE_TYPE_FILTER': {
            if(action.isActive) {
                state.filters.set(action.filterType, typeFilter(action.filterType));
            } else {
                state.filters.delete(action.filterType);
            }
            return {...state}
        }
        case 'UPDATE_BRAND_FILTER': {
            if(action.isActive) {
                state.filters.set(action.filterType, brandFilter(action.filterType));
            } else {
                state.filters.delete(action.filterType);
            }
            return {...state}
        }
        case 'SEARCH_TEXT': {
            if (action.searchText.length > 0) {
                // state.filters.searchFilter = textFilter(action.searchText);
                state.filters.set("textFilter", textFilter(action.searchText.toLowerCase()));
                return { ...state };
            } else {
                // delete state.filters.searchFilter;    
                state.filters.delete("textFilter");
                return { ...state };
            }
        }




        case "SORT_INV_ASC": {
            state.inventory.sort((i1, i2) => sortInventoryByProperty(i1, i2, "inventoryID"))
            return {...state};
        }
        case "SORT_INV_DES": {
            state.inventory.sort((i1, i2) => sortInventoryByProperty(i2, i1, "inventoryID"))
            return {...state};
        }
        case "SORT_AMT_ASC": {
            state.inventory.sort((i1, i2) => sortInventoryByProperty(i1, i2, "quantity"))
            return {...state};
        }
        case "SORT_AMT_DES": {
            state.inventory.sort((i1, i2) => sortInventoryByProperty(i2, i1, "quantity"))
            return {...state};
        }
        case "SORT_SPACE_ASC": {
            state.inventory.sort((i1, i2) => sortInventoryByTotalSpace(i1, i2))
            return {...state};
        }
        case "SORT_SPACE_DES": {
            state.inventory.sort((i1, i2) => sortInventoryByTotalSpace(i2, i1))
            return {...state};
        }
        case "SORT_TITLE_ASC": {
            state.inventory.sort((i1, i2) => sortInventoryByItemProperty(i1, i2, "itemName"))
            return {...state};
        }
        case "SORT_TITLE_DES": {
            state.inventory.sort((i1, i2) => sortInventoryByItemProperty(i2, i1, "itemName"))
            return {...state};
        }
        case "SORT_TYPE_ASC": {
            state.inventory.sort((i1, i2) => sortInventoryByItemProperty(i1, i2, "itemType"))
            return {...state};
        }
        case "SORT_TYPE_DES": {
            state.inventory.sort((i1, i2) => sortInventoryByItemProperty(i2, i1, "itemType"))
            return {...state};
        }
        case "SORT_SIZE_ASC": {
            state.inventory.sort((i1, i2) => sortInventoryByItemProperty(i1, i2, "unitVolume"))
            return {...state};
        }
        case "SORT_SIZE_DES": {
            state.inventory.sort((i1, i2) => sortInventoryByItemProperty(i2, i1, "unitVolume"))
            return {...state};
        }
        case "SORT_BRAND_ASC": {
            state.inventory.sort((i1, i2) => sortInventoryByItemBrandProperty(i1, i2, "brandName"))
            return {...state};
        }
        case "SORT_BRAND_DES": {
            state.inventory.sort((i1, i2) => sortInventoryByItemBrandProperty(i2, i1, "brandName"))
            return {...state};
        }
        case "SORT_DATE_ASC": {
            state.inventory.sort((i1, i2) => sortInventoryByProperty(i1, i2, "inventoryDate"))
            return {...state};
        }
        case "SORT_DATE_DES": {
            state.inventory.sort((i1, i2) => sortInventoryByProperty(i2, i1, "inventoryDate"))
            return {...state};
        }

        default:
            console.log("DEFAULT REDUCER TRIGGERED");
            return state;
    }
}


function sortInventoryByProperty(i1: Inventory, i2: Inventory, property: string) {
    if (i1[property] < i2[property]) {
        return -1;
    }
    if (i1[property] > i2[property]) {
        return 1;
    }
    return 0;
}
function sortInventoryByItemProperty(i1: Inventory, i2: Inventory, property: string) {
    if (i1.item[property] < i2.item[property]) {
        return -1;
    }
    if (i1.item[property] > i2.item[property]) {
        return 1;
    }
    return 0;
}
function sortInventoryByItemBrandProperty(i1: Inventory, i2: Inventory, property: string) {
    if (i1.item.brand[property] < i2.item.brand[property]) {
        return -1;
    }
    if (i1.item.brand[property] > i2.item.brand[property]) {
        return 1;
    }
    return 0;
}
function sortInventoryByTotalSpace(i1: Inventory, i2: Inventory) {
    if (i1.quantity * i1.item.unitVolume < i2.quantity * i2.item.unitVolume ) {
        return -1;
    }
    if (i1.quantity * i1.item.unitVolume > i2.quantity * i2.item.unitVolume) {
        return 1;
    }
    return 0;
}
