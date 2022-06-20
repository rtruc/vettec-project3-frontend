export function convertDateToHTMLCompliantString(date: Date | string): string {
    return (JSON.parse(JSON.stringify(date))).substring(0, 10);
}
export function convertDateToJSONCompliantString(date: Date | string): string {
    return (JSON.parse(JSON.stringify(date)));
}

export function discardTimeFromDate(dateString: string): string {
    return dateString.substring(0, 10);
}


function generateRandomDateString(): string {
    return convertDateToJSONCompliantString(generateRandomDate());
}
function generateRandomDate(): Date {
    let date = new Date();
    let dayOffset = Math.trunc(Math.random() * 10);
    dayOffset = (Math.random() * 10) > 5 ? (dayOffset * -1) : dayOffset;
    date.setDate(date.getDate() + dayOffset);
    return date;
}