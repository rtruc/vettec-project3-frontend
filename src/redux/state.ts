import { dateFilter, Filter, todoFilter } from "../util/filters";
import { Task } from "../model/task";


// export type State = {
export interface State {
    tasks: Task[];
    filters: Map<string, Filter>;
    dateRange: {earlier: string, later: string};
}

export const initialState: State = {
    tasks: [],
    filters: new Map<string, Filter>(),
    dateRange: {earlier: "earlier", later: "later"}
}