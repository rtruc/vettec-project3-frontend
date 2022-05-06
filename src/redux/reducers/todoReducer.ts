import { AnyAction } from "redux";
import { convertDateToHTMLCompliantString, generateID } from "../../util/data";
import { dateFilter, textFilter } from "../../util/filters";
import { Task } from "../../model/task";
import { initialState } from "../state";


export const todoReducer = (state = initialState, action: AnyAction) => {
    
    switch(action.type) {
        case 'SORT_ALPHA_UP': {
            state.tasks.sort((t1, t2) => sortByTitle(t1, t2));            
            return {...state};
        }

        case 'SORT_ALPHA_DOWN': {
            state.tasks.sort((t1, t2) => sortByTitle(t2, t1));            
            return {...state};
        }

        case 'SORT_DATE_UP': {
            state.tasks.sort((t1, t2) => sortByDate(t1, t2));            
            return {...state};
        }

        case 'SORT_DATE_DOWN': {
            state.tasks.sort((t1, t2) => sortByDate(t2, t1));            
            return {...state};
        }

        case 'ADD_TASK': {
            const date       = convertDateToHTMLCompliantString(new Date());
            const isComplete = action.pathName === "/completed" ? true : false;
            
            const newTask = new Task("New Task", date, isComplete, generateID());
            // const newTask = {title     : "New Task", 
            //                  date      : date,
            //                  isComplete: isComplete,
            //                  _id        : generateID()};

            // FRONT OR BACK FOR NEW TASKS?
            state.tasks.push(newTask);
            // state.tasks.unshift(newTask);
            return {...state};
        }

        case 'CHECKBOX_CLICKED': {
            const tasks = state.tasks;

            const index = findTaskNumberIndexByID(tasks, action._id);
            tasks[index].isComplete = !(tasks[index].isComplete);

            return {...state};
        }

        case 'EDIT_TITLE': {            
            const index = findTaskNumberIndexByID(state.tasks, action._id);
            state.tasks[index].title = action.textUpdate;

            return state;
        }

        case 'EDIT_DATE': {
            const tasks = state.tasks;

            const index = findTaskNumberIndexByID(tasks, action._id);
            tasks[index].date = action.dateUpdate;

            return {...state};
        }

        case 'DELETE_TASK': {
            const tasks = state.tasks;
            const index = findTaskNumberIndexByID(tasks, action._id);

            tasks.splice(index, 1);

            return {...state};
        }

        case 'SEARCH_TITLES': {
            if(action.searchText.length > 0) {
                // state.filters.searchFilter = textFilter(action.searchText);
                state.filters.set("textFilter", textFilter(action.searchText));
                return {...state};
            } else {
                // delete state.filters.searchFilter;    
                state.filters.delete("textFilter");    
                return {...state};
            }
        }

        case 'UPDATE_DATE_FILTER': {
            // state.dateRange[action.dateType] = action.newDate;
            action.dateType === 'earlier' ? state.dateRange.earlier = action.newDate :
                                            state.dateRange.later   = action.newDate;

            // FORCE STATE UPDATE IF DATE FILTER IS IN USE
            // if(state.filters.dateFilter) {
            if(state.filters.has("dateFilter")) {
                const earlier = state.dateRange.earlier;
                const later   = state.dateRange.later;
                state.filters.set("dateFilter", dateFilter(earlier, later));
                return {...state};
            }

            return state;
        }

        case 'TOGGLE_DATE_FILTER': {

            if(state.filters.has("dateFilter")) {
                state.filters.delete("dateFilter");
            } else {
                const earlier = state.dateRange.earlier;
                const later = state.dateRange.later;
                state.filters.set("dateFilter", dateFilter(earlier, later));
            }

            return {...state};
        }

        default:
            return state;
    }
}

// TODO: OBJECT INDEX BY STRING VAR IN TYPESCRIPT?
// function sortByProperty(t1: Task, t2: Task, property: string) {
//     if (t1[property] < t2.title) {
//         return -1;
//     }
//     if (t1.title > t2.title) {
//         return 1;
//     }
//     return 0;
// }
function sortByTitle(t1: Task, t2: Task) {
    if (t1.title < t2.title) {
        return -1;
    }
    if (t1.title > t2.title) {
        return 1;
    }
    return 0;
}
function sortByDate(t1: Task, t2: Task) {
    if (t1.date < t2.date) {
        return -1;
    }
    if (t1.date > t2.date) {
        return 1;
    }
    return 0;
}

function findTaskNumberIndexByID(tasks: Task[], _id: String) :number {
    for(let i in tasks) {
        if(tasks[i]._id === _id) {
            return parseInt(i);
        }
    }
    return -1;
}