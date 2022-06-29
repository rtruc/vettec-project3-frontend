import { createStore } from "redux";
import { testInventory } from "../util/inventoryTestData";
import { omniReducer } from "./reducers/omniReducer";
import { initialState } from "./state";

const initState = initialState;

initState.inventoryRecords = JSON.parse(JSON.stringify(testInventory));

export const store = createStore(omniReducer, initState);