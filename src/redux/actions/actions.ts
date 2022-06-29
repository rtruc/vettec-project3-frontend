import { InventoryRecord } from "../../model/inventoryRecord";
import { Item } from "../../model/item";
import { Warehouse } from "../../model/warehouse";



export const updateStateInvRecords = (inventoryRecords: InventoryRecord[]) =>
                                     ({ type: 'UPDATE_STATE_RECORDS', inventoryRecords })
export const clearStateInvRecords = () => ({ type: 'CLEAR_STATE_RECORDS' })

export const updateStateInvRecord = (record: InventoryRecord) => 
                                    ({ type: 'UPDATE_STATE_RECORD', record })
export const deleteStateInvRecord = (record: InventoryRecord) => 
                                    ({ type: 'DELETE_STATE_RECORD', record })

export const sortStateInvRecords = (type: string) => ({ type })


export const updateStateWarehouses = (warehouses: Warehouse[]) => 
                                     ({ type: 'UPDATE_STATE_WAREHOUSES', warehouses })
export const updateActiveWarehouse = (warehouseID: number) => 
                                       ({ type: 'UPDATE_SELECTED_WAREHOUSE', warehouseID })


export const updateStateItems = (items: Item[]) => 
                                ({ type: 'UPDATE_STATE_ITEMS', items })


export const displayLargeInventoryRecordView = (inventoryRecord: InventoryRecord) => 
                                               ({ type: 'DISPLAY_LARGE_ITEM', inventoryRecord })
export const displayAddInventoryRecordCard = () => ({ type: 'DISPLAY_ADD_ITEM' })
export const dismissInventoryRecordCard = () => ({ type: 'DISMISS_CARD' })


export const searchText = (searchText: string) => 
                          ({ type: 'SEARCH_TEXT', searchText });
export const updateTypeFilter = (filterType: string, isActive: boolean) => 
                                ({ type: 'UPDATE_TYPE_FILTER', filterType, isActive })
export const updateBrandFilter = (filterType: string, isActive: boolean) => 
                                 ({ type: 'UPDATE_BRAND_FILTER', filterType, isActive })