import { TodoList } from "./models/TodoList"
import { Task } from "./models/Task"

// Initialiser l'app
const list = new TodoList()
// Ajouter une tache
document.querySelector(".btn-1")?.addEventListener("click",() => {
  const input = document.querySelector("textarea")
  if(input?.value != undefined) {
  const task = new Task(input.value,false,list.list.length)
  list.ajouterTache(task)
  }
})

// Supprimer les élements cochés
document.querySelector(".btn-2")?.addEventListener("click",() => {
  list.supprimerCoches()
})
// Supprimer toute la liste
document.querySelector(".btn-3")?.addEventListener("click",() => {
  list.viderListe()
})
// Cocher les taches / supprimer une tâche en particulier
window.addEventListener("click",(e) => {
  // Cocher tâche
  document.querySelectorAll(".item").forEach((task) => {
    if (e.target === task) {
      list.cocherTache(task)   
    }
  })
  // Supprimer tâche
  document.querySelectorAll("span").forEach((deleteBtn) => {
    if(e.target === deleteBtn) {
      list.supprimerTache(deleteBtn)
    }
  })
})