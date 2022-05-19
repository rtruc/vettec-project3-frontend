import { Company } from "./company";
import { Location } from "./location";

export class Brand {
    brandID: number;
    brandName: string;
    company: Company;
    location: Location;

    [propName: string]: string | number | Company | Location;


    constructor(brandId: number, brandName: string, company: Company, location: Location) {
        this.brandID = brandId;
        this.brandName = brandName;
        this.company = company;
        this.location = location;
    }
}