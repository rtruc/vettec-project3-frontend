import { blankBrand, Brand } from "./brand";

export class Item {
    itemID: number;
    itemName: string;
    itemType: string;
    brand: Brand;
    unitVolume: number;
    description: string;
    imageURL: string;

    [propName: string]: string | number | Brand;


    constructor(itemID: number, itemName: string, itemType: string, brand: Brand, unitVolume: number, description: string, imageURL: string) {
        this.itemID      = itemID;
        this.itemName    = itemName;
        this.itemType    = itemType;
        this.brand       = brand;
        this.unitVolume  = unitVolume;
        this.description = description;
        this.imageURL    = imageURL;
    }
}

export const blankItem = new Item(-1, "", "", blankBrand, 0, "", "generic_beer.jpg");