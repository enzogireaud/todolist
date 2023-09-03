export class Task {
    // On initie la classe task avec ses propriétés
    content:string
    done:boolean
    id:number
    constructor(content:string, done:boolean, id:number) {
        this.content = content
        this.done = done
        this.id = id
    }

    // On créer une méthode pour toggle la propriété "done" de l'élement
    marquerCommeFaite() {
        this.done = !this.done
    }    
}