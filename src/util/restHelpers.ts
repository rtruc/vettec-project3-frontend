import axios from "axios";
import { useDispatch } from "react-redux";
import { Warehouse } from "../model/warehouse";
import { updateInventory, updateItems, updateWarehouses } from "../redux/actions/actions";

export function useWarehousesGetAll() {
    const dispatch = useDispatch();
    axios.get(`${process.env.REACT_APP_REST_URL}/warehouses`)
         .then(({ data }) => dispatch(updateWarehouses(data)))
         .catch((error) => console.log("WAREHOUSE UPDATE FAILED", error))
}

export function useItemsGetAll() {
    const dispatch = useDispatch();
    axios.get(`${process.env.REACT_APP_REST_URL}/items`)
            .then(({ data }) => dispatch(updateItems(data)))
         .catch((error) => console.log("ITEM UPDATE FAILED", error))
}

// export function useGetInventoryForCurrentWarehouse(warehouseID: number) {
//     const dispatch = useDispatch();
//     axios.get(`${ process.env.REACT_APP_REST_URL}/warehouses/${warehouseID}`)
//          .then(({data}) => dispatch(updateInventory(data)))
// }