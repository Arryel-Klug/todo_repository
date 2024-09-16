// import LocalStorage from "./LocalStorage";

class LocalStorage{
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
        // invoca o método push para o array "list", mandando um objeto com id e task
        this.list.push({id,task});
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

// import {generateUUID} from "./utils/generateUUID"
// usaria um pacote nesse caso, mas como não queria instalar nenhum só peguei uma função aleatória gerada pelo chatGPT
function generateUUID() {
    // Gera um array de 16 bytes aleatórios
    const crypto = window.crypto || window.msCrypto; // Suporte para navegadores
    const bytes = new Uint8Array(16);
    crypto.getRandomValues(bytes);

    // Define as versões e variantes para o UUID v4
    bytes[6] = (bytes[6] & 0x0f) | 0x40; // Versão 4
    bytes[8] = (bytes[8] & 0x3f) | 0x80; // Variante DCE 1.1

    // Converte os bytes em uma string UUID
    const uuid = [
        bytes[0].toString(16).padStart(2, '0'),
        bytes[1].toString(16).padStart(2, '0'),
        bytes[2].toString(16).padStart(2, '0'),
        bytes[3].toString(16).padStart(2, '0'),
        bytes[4].toString(16).padStart(2, '0'),
        bytes[5].toString(16).padStart(2, '0'),
        bytes[6].toString(16).padStart(2, '0'),
        bytes[7].toString(16).padStart(2, '0'),
        bytes[8].toString(16).padStart(2, '0'),
        bytes[9].toString(16).padStart(2, '0'),
        bytes[10].toString(16).padStart(2, '0'),
        bytes[11].toString(16).padStart(2, '0'),
        bytes[12].toString(16).padStart(2, '0'),
        bytes[13].toString(16).padStart(2, '0'),
        bytes[14].toString(16).padStart(2, '0'),
        bytes[15].toString(16).padStart(2, '0')
    ].join('');

    // Insere os hífens no formato padrão
    return uuid.slice(0, 8) + '-' + uuid.slice(8, 12) + '-' + uuid.slice(12, 16) + '-' + uuid.slice(16, 20) + '-' + uuid.slice(20);
}


const localStorageImpl = new LocalStorage();

//chama função carregarTarefas
carregarTarefas();

// Função para adicionar uma tarefa no array/lista
function adicionarTarefa() {

    const input = document.getElementById("input");
    // cria const task e pega o valor do campo "input" e atribui a ela, removendo os espaços iniciais e finais
    const task = input.value.trim("");


    // verifica se task não é "false"
    if(task === "") {
        alert("Digite uma tarefa");
        return;
    }
    // chama o método "adicionar" para 
    localStorageImpl.adicionar(task);

    //chama função carregarTarefas
    carregarTarefas();
    // seta o valor do input para "em branco"
    input.value = "";
}

// cria a função removerTarefa que espera a ID do elemento como argumento
function removerTarefa(id) {
    // a função invoca o método remover da classe LocalStorage que teve sua instancia iniciada na variavel localStorageImpl
    localStorageImpl.remover(id);
    //chama função carregarTarefas
    carregarTarefas();
}

//cria a função carregarTarefas
function carregarTarefas(){     
    
    const list = document.getElementById("list"); 
    // limpa o conteúdo da variável list, ou seja, limpa o conteúdo que está sendo mostrado na tela
    list.innerHTML = "";    
    // através do método forEach na lista (array), vai criando a lista no HTML para o usuário, para cada elemento ele cria um <li> com a id da task, 
    // sendo o conteúdo apresentado ao usuário a descrição da task
    // também cria um botão "Delete" com um evento de onClick que chama a função tarefa e que contém já fixo a task.id (deve ter uma forma mais bonita/eficiente de fazer isso)
    localStorageImpl.list.forEach(task => {
        list.innerHTML +=
            `<li id="${task.id}">
                ${task.task} 
                <button onClick="removerTarefa('${task.id}')">Delete</button>
            </li>`
    })    
}

