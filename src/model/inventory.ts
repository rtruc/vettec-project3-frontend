import { blankItem, Item } from "./item";
// import { blankLocation, Location } from "./location";
// import { blankWarehouse, Warehouse } from "./warehouse";

export class Inventory {

    inventoryID: number;
    // warehouse: Warehouse;
    warehouseID: number;
    item: Item;
    quantity: number;
    inventoryDate: string;

    // [propName: string]: string | number | Warehouse | Item
    [propName: string]: string | number | Item

    // constructor(inventoryID: number, warehouse: Warehouse, item: Item, quantity: number, inventoryDate: string) {
    constructor(inventoryID: number, warehouseID: number, item: Item, quantity: number, inventoryDate: string) {
        this.inventoryID = inventoryID
        this.warehouseID = warehouseID
        this.item = item
        this.quantity = quantity
        this.inventoryDate = inventoryDate
    }
}

export const blankRecord = new Inventory(-1, -1, blankItem, -1, "1999-04-20");