import { AnyAction } from "redux";
import { convertDateToHTMLCompliantString, generateID } from "../../util/taskData";
import { textFilter } from "../../util/inventoryFilters";
import { Task } from "../../model/task";
import { initialState, State } from "../state";
import { Inventory } from "../../model/inventory";
import { stat } from "fs";



export const todoReducer = (state = initialState, action: AnyAction) => {

    switch (action.type) {

        case "UPDATE_INVENTORY": {
            state.inventory = action.inventory;
            console.log()
            // state.currentlySelectedWarehouse = state.inventory[0].warehouse;
            return {...state};
        }

        case "CLEAR_LOCAL_INVENTORY": {
            state.inventory = [];
            state.currentWarehouse = initialState.currentWarehouse;
            return {...state}
        }

        case "UPDATE_WAREHOUSES": {
            state.warehouses = action.warehouses;
            // console.log("UPDATING WAREHOUSE");
            // console.log(action.warehouses);
            return {...state};
        }

        case "UPDATE_SELECTED_WAREHOUSE": {
            state.currentWarehouse = 
                            state.warehouses.find(warehouse => warehouse.warehouseID === action.warehouseID) 
                            || null;
            return {...state};
        }


        case "DISPLAY_LARGE_ITEM": {
            state.activeRecord = action.inventory;
            return {...state};
        }

        case "DISMISS_LARGE_ITEM": {
            if(state.activeRecord) {
                state.activeRecord = null;
                return {...state};
            }
            return state;
        }

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
                // const recordUpdate = state.activeRecord;
                // const index = state.inventory.indexOf(recordUpdate);
                // state.inventory[index] = recordUpdate;

                const index = state.inventory.indexOf(state.activeRecord);
                state.inventory[index].quantity = action.quantity;
                state.activeRecord = null;
            }
            return {...state}
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




        case 'ADD_TASK': {
            const date = convertDateToHTMLCompliantString(new Date());
            const isComplete = action.pathName === "/completed" ? true : false;

            const newTask = new Task("New Task", date, isComplete, generateID());
            // const newTask = {title     : "New Task", 
            //                  date      : date,
            //                  isComplete: isComplete,
            //                  _id        : generateID()};

            // FRONT OR BACK FOR NEW TASKS?
            // state.tasks.push(newTask);
            // state.tasks.unshift(newTask);
            return { ...state };
        }

        case 'CHECKBOX_CLICKED': {
            // const tasks = state.tasks;

            // const index = findTaskNumberIndexByID(tasks, action._id);
            // tasks[index].isComplete = !(tasks[index].isComplete);

            return { ...state };
        }

        case 'EDIT_TITLE': {
            // const index = findTaskNumberIndexByID(state.tasks, action._id);
            // state.tasks[index].title = action.textUpdate;

            return state;
        }

        case 'EDIT_DATE': {
            // const tasks = state.tasks;

            // const index = findTaskNumberIndexByID(tasks, action._id);
            // tasks[index].date = action.dateUpdate;

            return { ...state };
        }

        case 'DELETE_TASK': {
            // const tasks = state.tasks;
            // const index = findTaskNumberIndexByID(tasks, action._id);

            // tasks.splice(index, 1);

            return { ...state };
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

        case 'UPDATE_DATE_FILTER': {
            // state.dateRange[action.dateType] = action.newDate;
            // action.dateType === 'earlier' ? state.dateRange.earlier = action.newDate :
            // state.dateRange.later   = action.newDate;

            // FORCE STATE UPDATE IF DATE FILTER IS IN USE
            // if(state.filters.dateFilter) {
            if (state.filters.has("dateFilter")) {
                // const earlier = state.dateRange.earlier;
                // const later   = state.dateRange.later;
                // state.filters.set("dateFilter", dateFilter(earlier, later));
                return { ...state };
            }

            return state;
        }

        case 'TOGGLE_DATE_FILTER': {

            if (state.filters.has("dateFilter")) {
                state.filters.delete("dateFilter");
            } else {
                // const earlier = state.dateRange.earlier;
                // const later = state.dateRange.later;
                // state.filters.set("dateFilter", dateFilter(earlier, later));
            }

            return { ...state };
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



function findTaskNumberIndexByID(tasks: Task[], _id: String): number {
    for (let i in tasks) {
        if (tasks[i]._id === _id) {
            return parseInt(i);
        }
    }
    return -1;
}