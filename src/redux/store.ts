import { createStore } from "redux";
import { testInventory } from "../util/inventoryTestData";
import { todoReducer } from "./reducers/todoReducer";
import { initialState } from "./state";

const initState = initialState;

initState.inventory = JSON.parse(JSON.stringify(testInventory));

export const store = createStore(todoReducer, initState);

// Send item info to action
// Build large view from that and drop it over the screen