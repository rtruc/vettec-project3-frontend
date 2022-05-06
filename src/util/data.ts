// TEST DATA
import { Task } from "../model/task";

const taskData = [
    {
        title: "Wash the Dog",
        date: "2022-04-15T01:41:51.593Z",
        isComplete: true,
        _id: ""
    },
    {
        title: "Buy Groceries",
        date: "2022-04-19T01:41:51.593Z",
        isComplete: false,
        _id: ""
    },
    {
        title: "Pay Bills",
        date: "2022-04-25T01:41:51.593Z",
        isComplete: true,
        _id: ""
    },
    {
        title: "Mow the Lawn",
        date: "2022-04-28T01:41:51.593Z",
        isComplete: false,
        _id: ""
    },
    {
        title: "Wash Dishes",
        date: "2022-04-22T01:41:51.593Z",
        isComplete: false,
        _id: ""
    },
    {
        title: "Buy Plane Tickets",
        date: "2022-05-05T01:41:51.593Z",
        isComplete: false,
        _id: ""
    },
    {
        title: "Visit Friends",
        date: "2022-05-19T01:41:51.593Z",
        isComplete: true,
        _id: ""
    },
    {
        title: "Ship Package",
        date: "2022-04-29T01:41:51.593Z",
        isComplete: true,
        _id: ""
    },
    {
        title: "Submit Assignment",
        date: "2022-04-22T01:41:51.593Z",
        isComplete: false,
        _id: ""
    },
    {
        title: "Sleep",
        date: "2022-04-23T01:41:51.593Z",
        isComplete: false,
        _id: ""
    }
]

export function getTasks(): Task[] {
    const tasks: Task[] = [];
    for(let task of taskData) {
        if(task._id === "") {
            task._id = generateID();
        }
        task.date = generateDateString();
        tasks.push(new Task(task.title, task.date, task.isComplete, task._id));
    }
    return tasks;
}

export function convertDateToHTMLCompliantString(date: Date | string): string {
    return (JSON.parse(JSON.stringify(date))).substring(0, 10);
}
export function convertDateToJSONCompliantString(date: Date | string): string {
    return (JSON.parse(JSON.stringify(date)));
}
export function discardTime(dateString: string): string {
    return dateString.substring(0, 10);
}

function generateDateString(): string {
    return convertDateToJSONCompliantString(generateDate());
}

function generateDate(): Date {
    let date = new Date();
    let dayOffset = Math.trunc(Math.random() * 10);
    dayOffset = (Math.random() * 10) > 5 ? (dayOffset * -1) : dayOffset;
    date.setDate(date.getDate() + dayOffset);
    return date;
}

// JS RANDOM FUNCTION IS WEAK, SO NOT A GREAT _id GENERATOR, BUT IT WILL GET THE JOB DONE
export function generateID(): string {
    const lookupString: string = `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890`;
    let _id = "";

    for (let i = 0; i < 33; i++) {
        let rand = Math.trunc(lookupString.length * Math.random());
        _id += lookupString[rand];
    }

    return _id;
}

