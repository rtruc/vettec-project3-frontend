import { createStore } from "redux";
import { convertDateToHTMLCompliantString, getTasks } from "../util/data";
import { todoReducer } from "./reducers/todoReducer";
import { initialState } from "./state";

let date          = new Date();
let todayString   = convertDateToHTMLCompliantString(date);
date.setDate(date.getDate() - 7);
let weekAgoString = convertDateToHTMLCompliantString(date);


const initState = initialState;
initState.tasks             = getTasks();
initState.dateRange.earlier = weekAgoString;
initState.dateRange.later   = todayString;


export const store = createStore(todoReducer, initState);
// export const store = createStore(todoReducer);