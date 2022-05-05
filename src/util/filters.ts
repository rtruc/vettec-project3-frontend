import { Task } from "./task";

export interface Filter {
    (task: Task): boolean;
}

// export interface Filters {
//     [filterName:string]:Filter
// }

export const todoFilter: Filter      = (task) => task.isComplete === false;
export const completedFilter: Filter = (task) => task.isComplete === true;
export const allFilter: Filter       = (task) => true;

export function textFilter(searchString: string): Filter {
    const txtFilter: Filter = (task) => 
                                task.title.toLowerCase().includes(searchString) || 
                                task.date.includes(searchString);

    return txtFilter;
    // return function(task: Task) {
    //     return task.title.toLowerCase().includes(searchString) || task.date.includes(searchString);
    // }
}     

export function dateFilter(earlier: string, later: string): Filter {
    
    if (earlier > later) {
        const swapper = later;
        later = earlier;
        earlier = swapper;
    }

    const dtFilter: Filter = (task) => earlier <= task.date && task.date <= later;
    return dtFilter;
    // return function(task: Task) {
    //     return earlier <= task.date && task.date <= later;
    // }
}