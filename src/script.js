import { LocalStorage } from "./Local_storage.js";

const localStorage = new LocalStorage();

loadTasks();

const add = document.getElementById("add");

add.addEventListener("click", addTask);

list.addEventListener("click", (event) => {
    const id = event.target.parentElement.dataset.id;
    const dataName = event.target.dataset.name;

    if(dataName === "delete"){
        removeTask(id);
    }
    if(dataName === "checkbox-feito"){
        changeTaskStatus(id);
    }
});

function addTask() {

    const input = document.getElementById("input");
    const task = input.value.trim("");

    if(task === "") {
        alert("Digite uma tarefa");
        return;
    }

    localStorage.add(task);

    loadTasks();

    input.value = "";
};

function removeTask(id) {

    localStorage.remove(id);

    loadTasks();
};

function changeTaskStatus(id) {

    localStorage.changeStatus(id);

    loadTasks();
};

function loadTasks() {

    const list = document.getElementById("list");

    list.innerHTML = "";

    localStorage.list.forEach(task => {
        const status = task.feito === true ? "checked" : null;
        const strikethrough = status === "checked" ? '<s>' : '';
        list.innerHTML +=
            `${strikethrough}
                <li id="${task.id}" style="border: 1px solid black; padding: 10px; ">
                    <div>
                    Criado em: ${task.dataCriacao}
                    <br>
                    Tarefa: ${task.task}
                    <br>
                        <div data-id="${task.id}" style="display:flex; justify-content: space-between">
                            <label>Feito</label>
                            <input data-name="checkbox-feito" type="checkbox" value="${task.feito}" ${status}>
                            <br>
                            <button data-name="delete">Deletar</button>
                        </div>
                    </div>
                </li><br>
            `
    })
};
