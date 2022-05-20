import { Inventory } from "../../model/inventory";
import { Warehouse } from "../../model/warehouse";


export const searchText = (searchText: string) => ({ type: 'SEARCH_TEXT', searchText: searchText });

export const updateInventory  = (inventory: Inventory[]) => ({ type: 'UPDATE_INVENTORY', inventory: inventory})
export const clearInventory   = () => ({ type: 'CLEAR_LOCAL_INVENTORY'})

export const updateWarehouses = (warehouses: Warehouse[]) => ({ type: 'UPDATE_WAREHOUSES', warehouses: warehouses})
export const updateSelectedWarehouse = (warehouseID: number) => ({ type: 'UPDATE_SELECTED_WAREHOUSE', warehouseID: warehouseID})

export const sortInventory = (type: string) => ({type: type})

export const displayLargeItemView = (inventory: Inventory) => 
                                    ({type: 'DISPLAY_LARGE_ITEM', inventory: inventory})
export const dismissLargeItemView = () => 
                                    ({type: 'DISMISS_LARGE_ITEM'})

export const deleteCurrentItem = (data: any) => 
                                   ({type: 'DELETE_INV_ITEM', data: data})

export const updateInventoryQuantity = (inventoryID: number, quantity: number ) => 
                                       ({type: 'UPDATE_INV_QUANTITY', inventoryID: inventoryID, quantity: quantity})


export const displayAddInventoryCard = () => ({type: 'DISPLAY_ADD_ITEM'})
export const cancelAddItem = () => ({type: 'CANCEL_ADD_ITEM'})
export const addInventoryItem = (newItem: Inventory) => (
                                {type: 'ADD_INV_ITEM', newItem: newItem})