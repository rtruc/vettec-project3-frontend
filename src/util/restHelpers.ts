import axios from "axios";
import { useDispatch } from "react-redux";
import { updateItems, updateWarehouses } from "../redux/actions/actions";

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