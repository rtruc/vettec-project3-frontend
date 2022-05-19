import axios from "axios";
import { useDispatch } from "react-redux";
import { createStore } from "redux";
import { testInventory } from "../util/inventoryTestData";
import { warehouseInit } from "../util/warehouseInitData";
import { updateWarehouses } from "./actions/actions";
import { todoReducer } from "./reducers/todoReducer";
import { initialState } from "./state";

const initState = initialState;

// const dispatch = useDispatch();

// axios.get(`http://localhost:8080/inventories`)
//     .then(({data}) => initState.inventory = data as Inventory[])
// axios.get(`http://localhost:8080/warehouses`)
//      .then(({data}) => dispatch(updateWarehouses(data)))
    //  .then(({data}) => console.log(data))
     

initState.inventory = JSON.parse(JSON.stringify(testInventory));
// initState.warehouses = JSON.parse(JSON.stringify(warehouseInit))
// console.log(initState.inventory);

export const store = createStore(todoReducer, initState);
// export const store = createStore(todoReducer);
