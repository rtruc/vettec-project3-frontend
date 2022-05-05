import { createStore } from "redux";
import { getTasks } from "../util/data";
import { todoReducer } from "./reducers/todoReducer";
import { initialState } from "./state";



// const tasks = getTasks();
// console.log("State Tasks: ", tasks);

const initState = initialState;
console.log("InitState: ", initState);
initState.tasks = getTasks();
console.log("InitState: ", initState);

export const store = createStore(todoReducer);