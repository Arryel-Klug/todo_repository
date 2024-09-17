import { formatDateTime } from "./utils/format_date.js";
import { generateUUID } from "./utils/generate_uuid.js"

export class LocalStorage {
    constructor() {
        this.list = [];

        this.carregar();
    };

    adicionar(task) {
        const id = generateUUID();
        const dataCriacao = formatDateTime(new Date());
        const status = false;

        this.list.push({ id,task, dataCriacao, feito: status });

        this.salvar();
    };

    remover(id) {
        const index = this.list.findIndex(tasks => tasks.id === id);

        this.list.splice(index,1);

        this.salvar();
    };

    alterarStatus(id) {
        const index = this.list.findIndex(tasks => tasks.id === id);

        if(this.list[index].feito === false) {
           this.list[index].feito = true;

        } else {

            this.list[index].feito = false;
        }

        this.salvar();
    };

    salvar() {

        localStorage.setItem("lista", JSON.stringify(this.list));
    };

    carregar() {

        const lista = localStorage.getItem("lista") ;

        if (lista){
            this.list = JSON.parse(lista);
        }
    };

};
