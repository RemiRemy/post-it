let zonePostIt = document.querySelector(".zonePostIt")




let postIt1 = new PostIt(200, 200, 200, 200, "yellow", "ca marche pas", "blue")
postIt1.affiche(zonePostIt)
console.log(postIt1)


postIt1.deplace(400, 400)

postIt1.agrandi(450, 450)

postIt1.changeTexte("Alors ça dit quoi ?", "green")