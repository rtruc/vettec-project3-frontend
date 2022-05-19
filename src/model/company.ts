import { Location } from "./location";

export class Company {
	
	companyID: number;
	companyName: string;
	location: Location;

    constructor(companyID: number, companyName: string, location: Location) {
        this.companyID = companyID;
        this.companyName = companyName;
        this.location =location;
    }
}