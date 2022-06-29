import axios from "axios";
import { InventoryRecord } from "../model/inventoryRecord";

class InventoryRecordService {
    postNewInventoryRecord(newRecord: InventoryRecord) {
        return axios.post(`${process.env.REACT_APP_REST_URL}/inventoryRecords/`, newRecord)
             .catch( error => console.log("INVENTORY RECORD POST FAILED"));
    }

    putInventoryRecord(record: InventoryRecord) {
        return axios.put(`${process.env.REACT_APP_REST_URL}/inventoryRecords/${record.inventoryID}`, record)
                    .catch( error => console.log("FAILED INVENTORY PUT REQUEST: ", error));

    }

    deleteInventoryRecord(inventoryID: number) {
        return axios.delete(`${process.env.REACT_APP_REST_URL}/inventoryRecords/${inventoryID}`);
    }
}

export default new InventoryRecordService();