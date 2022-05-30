import { combineReducers, createStore } from "redux";
import { testInventory } from "../util/inventoryTestData";
import { omniReducer } from "./reducers/omniReducer";
import { initialState } from "./state";


const initState = initialState;

initState.inventory = JSON.parse(JSON.stringify(testInventory));


export const store = createStore(omniReducer, initState);

console.log(store.getState())
console.log(initState)

// Send item info to action
// Build large view from that and drop it over the screen