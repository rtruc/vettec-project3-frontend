// export interface Location {
//     locationID: number;
//     city: string;
//     state: string | null;
//     country: string;
// }

export class Location {
    locationID: number;
    city: string;
    state: string | null;
    country: string;

    constructor(locationID: number, city: string, state: string | null, country: string) {
        this.locationID = locationID;
        this.city = city;
        this.state = state;
        this.country = country;
    }
}

export const blankLocation = new Location(-1, "", "", "");