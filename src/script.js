import { LocalStorage } from "./Local_storage.js";

const localStorage = new LocalStorage();

carregarTarefas();

const add = document.getElementById("add");

add.addEventListener("click", adicionarTarefa);

list.addEventListener("click", (event) => {
    const id = event.target.parentElement.dataset.id;
    const dataName = event.target.dataset.name;

    if(dataName === "delete"){
        removerTarefa(id);
    }
    if(dataName === "changeStatus"){
        alterarStatusTarefa(id);
    }
});

function adicionarTarefa() {

    const input = document.getElementById("input");
    const task = input.value.trim("");

    if(task === "") {
        alert("Digite uma tarefa");
        return;
    }

    localStorage.adicionar(task);

    carregarTarefas();

    input.value = "";
};

function removerTarefa(id) {

    localStorage.remover(id);

    carregarTarefas();
};

function alterarStatusTarefa(id) {

    localStorage.alterarStatus(id);

    carregarTarefas();
};

function carregarTarefas() {

    const list = document.getElementById("list");

    list.innerHTML = "";

    localStorage.list.forEach(task => {
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
