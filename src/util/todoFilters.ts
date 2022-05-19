import { Task } from "../model/task";

export interface todoFilter {
    (task: Task): boolean;
}

// export interface Filters {
//     [filterName:string]:Filter
// }

export const todoFilter: todoFilter      = (task) => task.isComplete === false;
export const completedFilter: todoFilter = (task) => task.isComplete === true;
export const allFilter: todoFilter       = (task) => true;

export function textFilter(searchString: string): todoFilter {
    const txtFilter: todoFilter = (task) => 
                                task.title.toLowerCase().includes(searchString) || 
                                task.date.includes(searchString);

    return txtFilter;
    // return function(task: Task) {
    //     return task.title.toLowerCase().includes(searchString) || task.date.includes(searchString);
    // }
}     

export function dateFilter(earlier: string, later: string): todoFilter {
    
    if (earlier > later) {
        const swapper = later;
        later = earlier;
        earlier = swapper;
    }

    const dtFilter: todoFilter = (task) => earlier <= task.date && task.date <= later;
    return dtFilter;
    // return function(task: Task) {
    //     return earlier <= task.date && task.date <= later;
    // }
}