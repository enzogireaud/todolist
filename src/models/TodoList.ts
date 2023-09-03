import { Task } from "./Task"

export class TodoList {
    // On initialise notre liste en précisant que ce sera un Array de "task"
    list:Array<Task>
    constructor(){
        this.list = []
    }

    // On crée le conteneur pour la tâche et le bouton supprimé et on l'ajoute à la balise "container".
    ajouterTache(task:Task) {
        this.list.push(task)
        const item = document.createElement("div")
        const taskContainer = document.createElement("p")
        taskContainer.classList.add("item")
        taskContainer.id = task.id.toString()
        taskContainer.innerText = task.content
        const deleteTaskBtn = document.createElement("span")
        deleteTaskBtn.innerText = "Delete"
        deleteTaskBtn.classList.add(task.id.toString())
        item.appendChild(taskContainer)
        item.appendChild(deleteTaskBtn)
        document.querySelector(".container")?.appendChild(item)   
    }

    // On cible le parent du bouton cliqué et on le remove() et on retire de la liste l'élement correspondant
    supprimerTache(task:Element) {
        task.parentElement?.remove()
        this.list.splice(Number(task.className),1)
    }


    // On filtre la liste pour garder uniquement les élements non cochés. Puis on remove le parent des élements qui ont la classe "checked"
    supprimerCoches() {
        this.list.filter((el) => el.done == false)
        document.querySelectorAll(".item").forEach((task)=> {
            if(task.className.includes("checked")){
                task.parentElement?.remove()
            }
        })
    }

    // On toggle la propriété "done" sur la task et on rends le changement visible avec l'ajout de la classe "checked"
    cocherTache(task:Element) {
        const elId = Number(task.id)
        this.list[elId].marquerCommeFaite()
        document.getElementById(`${elId}`)?.classList.toggle("checked")
    }


    // On supprime le contenu de la balise container et on réinitialise la liste avec des crochets vides
    viderListe() {
    this.list = []
    const container = document.querySelector(".container")
    if(container) container.innerHTML = ``
}
}