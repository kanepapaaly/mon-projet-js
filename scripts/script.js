
// fonction qui affiche le score
function afficherResultat(score, nbMotsProposes) {
    // affichage dynamique
    let spanScore = document.querySelector(".zoneScore span")
    let affichageScore = `${score} / ${nbMotsProposes}`

    spanScore.innerHTML = affichageScore
}

// fonction pour afficher la proposition de mots ou phrases 
function afficherProposition(proposition) {
    let inputEcriture = document.querySelector(".zoneProposition")
    inputEcriture.innerText = proposition
}

// fonction pour lancer le jeu (à appeler dans main.js)
function lancerJeu() {

    let score = 0
    let i = 0

    let monButton = document.getElementById("validerMot")
    let monSaisi = document.getElementById("inputEcriture")
    afficherProposition(listeMots[i])
    monButton.addEventListener("click", () => {
        console.log(monSaisi.value)
        
        if(monSaisi.value === listeMots[i]) {
            score++
        }

        i++
        afficherResultat(score, i)
        monSaisi.value = ''
        if(listeMots[i] === undefined) {
            afficherProposition("le Jeu est fini !")
            monButton.disabled = true
        } else {
            afficherProposition(listeMots[i])
        }
    })

    afficherResultat(score, i)

}
