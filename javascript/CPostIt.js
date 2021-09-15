
/**
 * @class PostIt - 
 */
class PostIt{
    x;
    y;
    largeur;
    hauteur;
    color;
    texte;
    colorTexte;
    myPostIt;
    /**
     * 
     * @param {*} num 
     * @param {*} x 
     * @param {*} y 
     * @param {*} largeur 
     * @param {*} hauteur 
     * @param {*} color 
     * @param {*} texte 
     * @param {*} colorTexte 
     */
    constructor(num, x = 180, y = 150, largeur = 200, hauteur = 200, color = "#F7DD00", texte = "vide ton cerveau ici ", colorTexte = "black" ) {
        this.x = x;
        this.y = y;
        this.largeur = largeur;
        this.hauteur = hauteur;
        this.color = color;
        this.texte = texte;
        this.colorTexte = colorTexte;
        this.num = num;
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
        let menu = document.createElement("div")
        menu.classList.add("menu") // pareil que className mais permet plusieur class css
        this.myPostIt.appendChild(menu)
        let resize = document.createElement("div")
        resize.classList.add("fas", "fa-expand-alt") 
        menu.appendChild(resize)
        let write = document.createElement("div")
        write.classList.add("fas", "fa-edit")
        menu.appendChild(write)
        this.myPostIt.addEventListener("click", event=> {
            console.log(this.num)
           if( numPostIt != this.num) {
               numPostIt = this.num
           }else{
               numPostIt = -1
           }
        })
        zonePostIt.appendChild(this.myPostIt)
        

    }
}