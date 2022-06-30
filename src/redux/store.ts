import { createStore } from "redux";
import { testInventoryRecords } from "../util/inventoryTestData";
import { omniReducer } from "./reducers/omniReducer";
import { initialState } from "./state";

const initState = initialState;

initState.inventoryRecords = JSON.parse(JSON.stringify(testInventoryRecords));

export const store = createStore(omniReducer, initState);