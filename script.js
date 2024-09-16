import { LocalStorage } from "./LocalStorage.js";

const localStorageImpl = new LocalStorage();

carregarTarefas();

const add = document.getElementById('add');

add.addEventListener("click", adicionarTarefa);


list.addEventListener('click', (event) => {    
    const div = event.target.parentElement;
    const id = div.dataset.id;

    if(event.target.dataset.name === 'delete'){
        removerTarefa(id);
    }
    if(event.target.dataset.name === 'changeStatus'){
        alterarStatusTarefa(id);
    }
});

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

function alterarStatusTarefa(id) {
    //
    localStorageImpl.alterarStatus(id);
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
        const status = task.feito === false ? "Não Feito" : "Feito";
        const changeStatusButton = task.feito === true ? "Não Feito" : "Feito";
        list.innerHTML +=
            `<li id="${task.id}">                
                <div>
                Criado em: ${task.dataCriacao}
                <br>
                Tarefa: ${task.task}
                <br>
                Status: ${status}                    
                    <div data-id="${task.id}"> 
                        <button data-name="delete">Deletar</button>  
                        <button data-name="changeStatus">${changeStatusButton}</button>               
                    </div>
                </div>
            </li><br>`
    })
};