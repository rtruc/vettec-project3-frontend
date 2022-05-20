import axios from "axios";
import { Brand } from "../model/brand";
import { Company } from "../model/company";
import { Inventory } from "../model/inventory";
import { Item } from "../model/item";
import { Location } from "../model/location";
import { Warehouse } from "../model/warehouse";


// POST - CREATE NEW
// PATCH - UPDATE


export function getNullImages() {
    const printNullImages = (items: Item[]) => {
        let nullItemsArray: Item[] = []

        for(let item of items) {
            if(item.imageURL === null) {
                // if(!(nullItemsArray.includes(item))){
                    nullItemsArray.push(item);
                // }
                // console.log(record.item)
            }
            // console.log(nullItemsArray)
            console.log(JSON.stringify(nullItemsArray))

        }
    }
    axios.get(`${process.env.REACT_APP_REST_URL}/items`)
            .then(({ data }) => printNullImages(data) )
}

export function postInventoryEntry() {

}



export function restTestsGET(): void {
// LOCATIONS
let locations: Location[];
axios.get(`${process.env.REACT_APP_REST_URL}/locations`)
    .then(({data}) => locations = data)
    .then(() => console.log(locations))

// COMPANY
let companies: Company[];
axios.get(`${process.env.REACT_APP_REST_URL}/companies`)
    .then(({data}) => companies = data)
    .then(() => console.log(companies))

// WAREHOUSE
let warehouses: Warehouse[];
axios.get(`${process.env.REACT_APP_REST_URL}/warehouses`)
    .then(({data}) => warehouses = data)
    .then(() => console.log(warehouses))

// BRAND
let brands: Brand[];
axios.get(`${process.env.REACT_APP_REST_URL}/brands`)
    .then(({data}) => brands = data)
    .then(() => console.log(brands))

// ITEM
let items: Item[];
axios.get(`${process.env.REACT_APP_REST_URL}/items`)
    .then(({data}) => items = data)
    .then(() => console.log(items))

// INVENTORY
let inventories: Inventory[];
axios.get(`${process.env.REACT_APP_REST_URL}/inventories`)
    .then(({data}) => inventories = data)
    .then(() => console.log(inventories))
}



function testJSONdata(data: any): void {
    const locationArray: Location[] = data;

    for(const location of locationArray){
        console.log(location);
    }
}