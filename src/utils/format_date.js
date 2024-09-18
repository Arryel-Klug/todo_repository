export class FormatDate {
    constructor() {}

    formatToDate(date) {
        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const year = String(date.getFullYear()).slice(-2);

        return `${day}/${month}/${year}`;
    };

    formatToTime(date) {
        const hours = String(date.getHours()).padStart(2, "0");
        const minutes = String(date.getMinutes()).padStart(2, "0");

        return `${hours}:${minutes}`;
    };

    formatToDateTime(date) {
        const toDate = this.formatToDate(date);
        const toTime = this.formatToTime(date);

        return `${toDate} ${toTime}`
    };

    toObjectDate (date) {
        return new Date(date);
    };
};
