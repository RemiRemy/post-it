let numPostIt = -1
let action = ""
let zonePostIt = document.querySelector(".zonePostIt")
let arrayPostIt = []

document.getElementById('create').addEventListener('click', ()=> {
    console.log('ajout post it')
    arrayPostIt.push(new PostIt(arrayPostIt.length))
    arrayPostIt[arrayPostIt.length - 1].affiche(zonePostIt)
})

// let postIt1 = new PostIt(1, 200, 200, 200, 200, "yellow", "ca marche pas", "blue" )
// postIt1.affiche(zonePostIt)
// console.log(postIt1)


// postIt1.deplace(400, 400)

// postIt1.agrandi(450, 450)

// postIt1.changeTexte("Alors ça dit quoi ?", "green")


window.addEventListener("mousemove", event => {
    // console.log(event)
    if(numPostIt != -1) {
        arrayPostIt[numPostIt].deplace(event.clientX-80, event.clientY-80)
    }
} )
