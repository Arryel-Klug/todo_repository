import { FormatDate } from "./utils/format_date.js";
import { GenerateUUID } from "./utils/generate_uuid.js";

export class LocalStorage {
    constructor() {
        this.list = [];

        this.load();
    };

    add(task) {
        const formatDate = new FormatDate();
        const generateUUID = new GenerateUUID();

        const id = generateUUID.getUUID();

        const creationDate = formatDate.formatToDateTime(new Date());
        console.log(formatDate.toObjectDate('1996/06/24 11:11:11'));
        const status = false;

        this.list.push({ id, task, dataCriacao: creationDate, feito: status });

        this.save();
    };

    remove(id) {
        const index = this.list.findIndex(tasks => tasks.id === id);

        this.list.splice(index,1);

        this.save();
    };

    changeStatus(id) {
        const index = this.list.findIndex(tasks => tasks.id === id);

        if(this.list[index].feito === false) {
           this.list[index].feito = true;

        } else {
            this.list[index].feito = false;
        }

        this.save();
    };

    save() {

        localStorage.setItem("lista", JSON.stringify(this.list));
    };

    load() {
        const list = localStorage.getItem("lista") ;

        if (list){
            this.list = JSON.parse(list);
        }
    };

};
