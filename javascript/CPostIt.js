

class PostIt{
    x;
    y;
    largeur;
    hauteur;
    color;
    texte;
    colorTexte;
    myPostIt;
    constructor(x, y, largeur, hauteur, color, texte, colorTexte) {
        this.x = x;
        this.y = y;
        this.largeur = largeur;
        this.hauteur = hauteur;
        this.color = color;
        this.texte = texte;
        this.colorTexte = colorTexte;
        this.myPostIt = document.createElement("div")
    }
    deplace(x, y){
        this.x = x
        this.y = y
        this.myPostIt.style.top = this.y + "px"
        this.myPostIt.style.left = this.x + "px"    
    }

    agrandi(largeur, hauteur){
        this.largeur = largeur
        this.hauteur = hauteur
        this.myPostIt.style.width = this.largeur + "px"
        this.myPostIt.style.height = this.hauteur + "px"
    }

    changeTexte(texte, colorTexte){
        this.texte = texte 
        this.colorTexte = colorTexte
        this.myPostIt.style.backgroundColor = this.color 
        this.myPostIt.style.color = this.colorTexte
    }

    affiche( zonePostIt) {
        
        this.myPostIt.style.position = "fixed"
        this.myPostIt.style.top = this.y + "px" 
        this.myPostIt.style.left = this.x + "px"
        this.myPostIt.style.backgroundColor = this.color 
        this.myPostIt.style.width = this.largeur + "px"
        this.myPostIt.style.height = this.hauteur + "px"
        this.myPostIt.innerHTML = this.texte
        this.myPostIt.style.color = this.colorTexte
        zonePostIt.appendChild(this.myPostIt)

    }
}