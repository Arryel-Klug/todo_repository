export class DataValidation {
    constructor () {}

    validation (task, list) {
        if(!task) {
            return alert("Digite uma tarefa.");
        }

        if(task.length > 20) {
            return alert("A tarefa não pode ter mais que 20 caracteres.");
        }

        if(list.find(elem => elem.task === task)){
            return alert("Tarefa já cadastrada.");
        }

        return task;
    };

    // pensei em separar em um método para cada situação,
    // não sei o que seria o melhor, ficou do jeito que está acima:

    // isNull(task) {

    //     return "Digite uma tarefa."
    // }

    // isMoreThan20Characters(task) {
    //     if(task.length > 20){
    //         return "A tarefa não pode ter mais que 20 caracteres."
    //     }

    // }

    // isDuplicate(task) {

    //     return "Tarefa já cadastrada."
    // }

}
