import { formatDateTime } from "./utils/formatDate.js";
import { generateUUID } from "./utils/generateUUID.js"

export class LocalStorage{
    constructor(){
        // inicia a variavel list como um array vazio
        this.list = [];
        // chama o método carregar
        this.carregar();
    }
    // método adicionar que espera um argumento "task" (no caso uma string)
    adicionar(task) {
        // cria a const id e popula ela com o retorno da função generateUUID
        const id = generateUUID();
        const dataCriacao = formatDateTime(new Date());
        const status = false;
        // invoca o método push para o array "list", mandando um objeto com id e task
        this.list.push({ id,task, dataCriacao, feito: status });
        // chama o método salvar
        this.salvar();
    }
    // método remover que espera um argumento "id" 
    remover(id) {
        // busca o index do elemento passado por id através do método findIndex
        const index = this.list.findIndex(tasks => tasks.id === id);        
        // invoca o método splice para remover o item igual ao index da variável index
        this.list.splice(index,1);
        // chama o método salvar
        this.salvar();
    }
    alterarStatus(id){
        const index = this.list.findIndex(tasks => tasks.id === id); 
        
        if(this.list[index].feito === false) {
           this.list[index].feito = true;

        } else {

            this.list[index].feito = false;
        }        

        this.salvar();
    }
    // método salvar
    salvar() {
        // salva a lista no localStorage do navegador na key "lista"
        localStorage.setItem('lista', JSON.stringify(this.list));
    }
    // método carregar
    carregar() {
        // inicia a const lista e popula ela com o conteúdo do local storage na key "lista"
        const lista = localStorage.getItem('lista') ;
        // teste para ver se a lista não é false (undefined, null...)
        if (lista){
            // se caso "lista" for true, aplica o json.parse na const lista e atribui a "this.list"
            this.list = JSON.parse(lista);
        }
    }
    
}