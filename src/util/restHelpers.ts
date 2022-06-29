import axios from "axios";
import { useDispatch } from "react-redux";
import { updateStateItems, updateStateWarehouses } from "../redux/actions/actions";

// export function useWarehousesGetAll() {
//     const dispatch = useDispatch();
//     axios.get(`${process.env.REACT_APP_REST_URL}/warehouses`)
//          .then(({ data }) => dispatch(updateWarehouses(data)))
//          .catch((error) => console.log("WAREHOUSE UPDATE FAILED", error))
// }

// export function useItemsGetAll() {
//     const dispatch = useDispatch();
//     axios.get(`${process.env.REACT_APP_REST_URL}/items`)
//             .then(({ data }) => dispatch(updateItems(data)))
//          .catch((error) => console.log("ITEM UPDATE FAILED", error))
// }


// TODO: REFACTOR INTO SOMETHING MORE LIKE THIS?
// class WarehouseService {
//      getWarehouse() {
//          return axios.get(API_URL + "warehouse");
//      }
// 
// }


// class UserService {
//     getPublicContent() {
//         return axios.get(API_URL + "all");
//     }

//     getUserBoard() {
//         return axios.get(API_URL + "user", { headers: authHeader() });
//     }

//     getModeratorBoard() {
//         return axios.get(API_URL + "mod", { headers: authHeader() });
//     }

//     getAdminBoard() {
//         return axios.get(API_URL + "admin", { headers: authHeader() });
//     }
// }

// export default new UserService();