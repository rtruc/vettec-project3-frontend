import { Location } from "./location";

export class Warehouse {
    warehouseID: number;
	warehouseName: string;
	location: Location;
	maxStorageCapacity: number;
	
    constructor(    warehouseID: number, warehouseName: string, location: Location, maxStorageCapacity: number) {
        this.warehouseID = warehouseID;
        this.warehouseName = warehouseName;
        this.location = location;
        this.maxStorageCapacity = maxStorageCapacity;
    }
}