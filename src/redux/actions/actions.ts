import { Inventory } from "../../model/inventory";
import { Item } from "../../model/item";
import { Warehouse } from "../../model/warehouse";



export const updateInventory  = (inventory: Inventory[]) => ({ type: 'UPDATE_INVENTORY', inventory: inventory})
export const clearInventory   = () => ({ type: 'CLEAR_LOCAL_INVENTORY'})

export const updateWarehouses = (warehouses: Warehouse[]) => ({ type: 'UPDATE_WAREHOUSES', warehouses: warehouses})
export const updateSelectedWarehouse = (warehouseID: number) => ({ type: 'UPDATE_SELECTED_WAREHOUSE', warehouseID: warehouseID})

export const updateItems = (items: Item[]) => ({ type: 'UPDATE_ITEMS', items: items})

export const displayLargeItemView = (inventory: Inventory) => ({type: 'DISPLAY_LARGE_ITEM', inventory: inventory})
export const displayAddInventoryCard = () => ({type: 'DISPLAY_ADD_ITEM'})
export const dismissInventoryCard = () => ({type: 'DISMISS_CARD'})


export const deleteCurrentItem = (data: any) => ({type: 'DELETE_INV_ITEM', data: data})
// export const addInventoryItem = (newItem: Inventory) => ({type: 'ADD_INV_ITEM', newItem: newItem})
export const updateInventoryQuantity = (inventoryID: number, quantity: number ) => ({type: 'UPDATE_INV_QUANTITY', inventoryID: inventoryID, quantity: quantity})


export const sortInventory = (type: string) => ({type: type})

export const searchText = (searchText: string) => ({ type: 'SEARCH_TEXT', searchText: searchText });
export const updateTypeFilter = (filterType: string, isActive: boolean) => ({type: 'UPDATE_TYPE_FILTER', filterType: filterType, isActive: isActive})
export const updateBrandFilter = (filterType: string, isActive: boolean) =>   ({type: 'UPDATE_BRAND_FILTER', filterType: filterType, isActive: isActive})