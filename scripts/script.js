

/* const motApp = "Bonjour";
let motUser = prompt("Entrer le mot : " + motApp);

if(motApp === motUser) {
    console.log("Bravo !");
} else {
    console.log("Vous avez fait une erreur de frappe.")
} */

/* const motApp = "Bonjour";
let motUser = prompt("Entrer le mot : " + motApp);

switch(motUser) {
    case motApp:
        console.log("Bravo !");
        break;
    case "Gredin":
        console.log("Soyez correct !");
        break;
    case "Vilain":
        console.log("Soyez gentil !");
        break;
    default:
        console.log("Vous avez fait une erreur de frappe.");
} */


/* const listeMots = ["Papa", "Aly", "Kane"]
let score = 0

let motUser = prompt("Entrer le mot : " + listeMots[0])

if(motUser === listeMots[0]) {
    score++
    //console.log("Score : " + score)
}

motUser = prompt("Entrer le mot : " + listeMots[1])
if(motUser === listeMots[1]) {
    score++
} 
        
motUser = prompt("Entrer le mot : " + listeMots[2])
if(motUser === listeMots[2]) {
    score++
}
    
console.log("Score : " + score)
 */




/* let score = 0
let motUser, motApp;

enterUser = prompt("Voulez-vous la liste des mots ou phrases ? ")

while(enterUser !== "mots" && enterUser !== "phrases") {
    enterUser = prompt("Voulez-vous la liste des mots ou phrases ? ")
}


if(enterUser === "mots") {
    for(let i = 0; i < listeMots.length; i++) {
        motApp = listeMots[i]
        motUser = prompt("Entrer le mot : " + motApp)
        if(motUser === motApp) {
            score++
        }
    }
} else {
    for(let i = 0; i < listePhrases.length; i++) {
        motApp = listePhrases[i]
        motUser = prompt("Entrer le mot : " + motApp)
        if(motUser === motApp) {
            score++
        }
    }
}

console.log("score : " + score + "/3") */


/* // fonction qui affiche le score
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

} */

let baliseZoneProposition = document.getElementById("zoneProposition")
console.log(baliseZoneProposition)

//let baliseZonePropositionSpan = document.querySelector("#zoneProposition span")
let baliseZonePropositionSpan = document.querySelector(".zoneProposition span")
console.log(baliseZonePropositionSpan)

let listeInputRadio = document.querySelectorAll(".zoneChoix input")
console.log(listeInputRadio)

// récuperer les éléments en détails
for(let i = 0; i < listeInputRadio.length; i++) {
    console.log(listeInputRadio[i])
}
