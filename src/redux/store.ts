import axios from "axios";
import { useDispatch } from "react-redux";
import { createStore } from "redux";
import { testInventory } from "../util/inventoryTestData";
import { restTestsGET } from "../util/restTest";
import { warehouseInit } from "../util/warehouseInitData";
import { updateWarehouses } from "./actions/actions";
import { todoReducer } from "./reducers/todoReducer";
import { initialState } from "./state";

const initState = initialState;

// const dispatch = useDispatch();

// axios.get(`${process.env.REACT_APP_API_URL}/inventories`)
//     .then(({data}) => initState.inventory = data as Inventory[])
// axios.get(`${process.env.REACT_APP_API_URL}/warehouses`)
//      .then(({data}) => dispatch(updateWarehouses(data)))
    //  .then(({data}) => console.log(data))
     
console.log(`${process.env.REACT_APP_REST_URL}`);
console.log(`${process.env.REACT_APP_PHOTO_URL}`);
initState.inventory = JSON.parse(JSON.stringify(testInventory));
// initState.warehouses = JSON.parse(JSON.stringify(warehouseInit))
// console.log(initState.inventory);

export const store = createStore(todoReducer, initState);
// export const store = createStore(todoReducer);

restTestsGET();
