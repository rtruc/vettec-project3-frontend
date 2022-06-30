import axios from "axios";


class WarehouseService {
    getWarehouseList() {
        return axios.get(`${process.env.REACT_APP_REST_URL}/warehouses`)
                    .then(({data}) => data)
                    .catch((error) => console.log("WAREHOUSE LIST GET FAILED", error));
    }

    getInventoryRecordsForSelectedWarehouse(warehouseID: number) {
        return axios.get(`${process.env.REACT_APP_REST_URL}/warehouses/${warehouseID}`)
                    .then(({data}) => data)
                    .catch(error => console.log("GET WAREHOUSE INVENTORY RECORDS FAILED", error));
    }

}

export default new WarehouseService();