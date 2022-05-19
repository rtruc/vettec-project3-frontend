import { Item } from "./item";
import { Warehouse } from "./warehouse";

export class Inventory {

    inventoryID: number;
    warehouse: Warehouse;
    item: Item;
    quantity: number;
    inventoryDate: string;

    [propName: string]: string | number | Warehouse | Item

    constructor(inventoryID: number, warehouse: Warehouse, item: Item, quantity: number, inventoryDate: string) {
        this.inventoryID = inventoryID
        this.warehouse = warehouse
        this.item = item
        this.quantity = quantity
        this.inventoryDate = inventoryDate
    }
}