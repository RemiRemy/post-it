let numPostIt = -1
let action = ""
let zonePostIt = document.querySelector(".zonePostIt")
let arrayPostIt = []


// Permet d'afficher un post it 
document.getElementById('create').addEventListener('click', ()=> {
    // console.log('ajout post it')
    arrayPostIt.push(new PostIt(arrayPostIt.length))
    arrayPostIt[arrayPostIt.length - 1].affiche(zonePostIt)
})

// let postIt1 = new PostIt(1, 200, 200, 200, 200, "yellow", "ca marche", "blue" )
// postIt1.affiche(zonePostIt)
// console.log(postIt1)


// postIt1.deplace(400, 400)

// postIt1.agrandi(450, 450)

// postIt1.changeTexte("Alors ça dit quoi ?", "green")

// Permet de déplacer un post it
window.addEventListener("mousemove", event => {
    console.log("deplace post it")
    if(numPostIt != -1) {
        arrayPostIt[numPostIt].deplace(event.clientX-80, event.clientY-80)
    }
} )

//Permet d'agrandir un post it
window.addEventListener("click", event => {
    console.log("agandir post it")
    if(numPostIt != -1) {
        arrayPostIt[numPostIt].agrandi(event.clientX, event.clientY)
    }
}) 
