// import { blankCompany, Company } from "./company";
import { blankLocation, Location } from "./location";

export class Brand {
    brandID: number;
    brandName: string;
    // company: Company;
    location: Location;

    // [propName: string]: string | number | Company | Location;
    [propName: string]: string | number | Location;


    // constructor(brandId: number, brandName: string, company: Company, location: Location) {
    constructor(brandId: number, brandName: string, location: Location) {
        this.brandID = brandId;
        this.brandName = brandName;
        // this.company = company;
        this.location = location;
    }
}

export const blankBrand = new Brand(-1, "", blankLocation);