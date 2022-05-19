import { Inventory } from "../../model/inventory";
import { Warehouse } from "../../model/warehouse";

export const addTask                = (pathName: string)          => ({ type: 'ADD_TASK', pathName: pathName});

export const toggleCompletionStatus = (_id: string)               => ({ type: 'CHECKBOX_CLICKED', _id: _id});
export const deleteTask             = (_id: string)               => ({ type: 'DELETE_TASK', _id: _id});
export const editTitle              = (_id: string, textUpdate: string)   => ({ type: 'EDIT_TITLE', _id: _id, textUpdate  : textUpdate});
export const editDate               = (_id: string, dateUpdate: string)   => ({ type: 'EDIT_DATE',  _id: _id, dateUpdate  : dateUpdate});

export const toggleDateFilter       = ()                  => ({ type: 'TOGGLE_DATE_FILTER'});
export const updateDateFilter       = (newDate: string, dateType: string) => ({ type: 'UPDATE_DATE_FILTER', newDate: newDate, dateType: dateType});

export const searchText           = (searchText: string)        => ({ type: 'SEARCH_TEXT', searchText: searchText });


export const updateInventory  = (inventory: Inventory[])       => ({ type: 'UPDATE_INVENTORY', inventory: inventory})
export const clearInventory   = ()                             => ({ type: 'CLEAR_LOCAL_INVENTORY'})
export const updateWarehouses = (warehouses: Warehouse[])      => ({ type: 'UPDATE_WAREHOUSES', warehouses: warehouses})

export const sortInventory = (type: string)                    => ({type: type})
