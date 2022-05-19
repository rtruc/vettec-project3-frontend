import axios from "axios";
import { Brand } from "../model/brand";
import { Company } from "../model/company";
import { Inventory } from "../model/inventory";
import { Item } from "../model/item";
import { Location } from "../model/location";
import { Warehouse } from "../model/warehouse";

export function restTest(): void {
// LOCATIONS
let locations: Location[];
axios.get(`http://localhost:8080/locations`)
    // .then(({data}) => testJSONdata(data))
    .then(({data}) => locations = data)
    .then(() => console.log(locations))

// COMPANY
let companies: Company[];
axios.get(`http://localhost:8080/companies`)
    // .then(({data}) => testJSONdata(data))
    .then(({data}) => companies = data)
    .then(() => console.log(companies))

// WAREHOUSE
let warehouses: Warehouse[];
axios.get(`http://localhost:8080/warehouses`)
    // .then(({data}) => testJSONdata(data))
    .then(({data}) => warehouses = data)
    .then(() => console.log(warehouses))

// BRAND
let brands: Brand[];
axios.get(`http://localhost:8080/brands`)
    // .then(({data}) => testJSONdata(data))
    .then(({data}) => brands = data)
    .then(() => console.log(brands))

// ITEM
let items: Item[];
axios.get(`http://localhost:8080/items`)
    // .then(({data}) => testJSONdata(data))
    .then(({data}) => items = data)
    .then(() => console.log(items))

// INVENTORY
let inventories: Inventory[];
axios.get(`http://localhost:8080/inventories`)
    // .then(({data}) => testJSONdata(data))
    .then(({data}) => inventories = data)
    .then(() => console.log(inventories))
}



function testJSONdata(data: any): void {
    const locationArray: Location[] = data;

    for(const location of locationArray){
        console.log(location);
    }
}