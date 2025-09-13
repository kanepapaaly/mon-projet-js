
// fonction qui affiche le score
function afficherResultat(score, nbMotsProposes) {
    console.log("Le score est : " + score + " sur " + nbMotsProposes)
}

// choix de mots ou phrases à taper 
function choisirPhrasesOuMots() {
    let choix = prompt("Voulez-vous la liste des mots ou phrases ? ")
    while(choix !== "mots" && choix !== "phrases") {
        choisirPhrasesOuMots = prompt("Voulez-vous la liste des mots ou phrases ? ")
    }
    return choix
}


// fonction pour lancer la boucle de jeu
function lancerBoucleDeJeu(listePropositions) {
    let score = 0
    let motUser, motApp;
    for(let i = 0; i < listePropositions.length; i++) {
        motApp = listePropositions[i]
        motUser = prompt("Entrer le mot/phrase : " + motApp)

        if(motUser === motApp) {
            score++
        }
    }
    return score
}

// fonction pour lancer le jeu (à appeler dans main.js)
function lancerJeu() {

    let choix = choisirPhrasesOuMots()
    let score = 0
    let nbMotsProposes = 0

    if(choix === "mots") {
        nbMotsProposes = listeMots.length
        score = lancerBoucleDeJeu(listeMots)
    } else {
        nbMotsProposes = listePhrases.length
        score = lancerBoucleDeJeu(listePhrases)
    }

    afficherResultat(score, nbMotsProposes)

}
