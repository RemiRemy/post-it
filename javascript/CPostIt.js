

class PostIt{
    x;
    y;
    largeur;
    hauteur;
    color;
    texte;
    constructor(x, y, largeur, hauteur, color, texte) {
        this.x = x;
        this.y = y;
        this.largeur = largeur;
        this.hauteur = hauteur;
        this.color = color;
        this.texte = texte;
    }
    deplace(){

    }

    agrandi(){

    }

    changeTexte(){

    }

    affiche() {
        let zonePostIt
        zonePostIt = document.querySelector(".zonePostIt")
        let myPostIt = document.createElement("div")
        myPostIt.style.position = "fixed"
        myPostIt.style.top = this.y + "px" 
        myPostIt.style.left = this.x + "px"
        myPostIt.style.backgroundColor = this.color 
        myPostIt.style.width = this.largeur + "px"
        myPostIt.style.height = this.hauteur + "px"
        myPostIt.innerHTML = this.texte
        zonePostIt.appendChild(myPostIt)


        
    }
}