// interface Task {
//     title: String;
//     date: String;
//     isComplete: boolean;
//     _id: String;
// }

export class Task {
    title: string;
    date: string;
    isComplete: boolean;
    _id: string;

    constructor(title: string, date: string, isComplete: boolean, _id: string) {
        this.title = title;
        this.date = date;
        this.isComplete = isComplete;
        this._id = _id;
    }

}