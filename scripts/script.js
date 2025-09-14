
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

// cette fonction costruit et affiche l'email
function afficherEmail(nom, email, score) {
    let mailto = `mailto:${email}?subject=Partage du score AzerType&body=Salut, je suis ${nom} et je viens de réaliser le score ${score} sur le site Azertype.`
    location.href = mailto
}

// cette fonction permet de valider un nom (dans le champs de saisi)
function validerNom(nom) {
    if(nom.length < 2) {
        throw new Error("Nom trop court !")
    }
}

// cette fonction permet de valider un nom (dans le champs de saisi)
function validerEmail(email) {
    let regexEmail = new RegExp("[a-zA-Z0-9-_.]+@[a-zA-Z0-9-_.]+\\.[a-zA-Z0-9-_.]+")
    if(!regexEmail.test(email)) {
        throw new Error("Email invalide !")
    }
}

// affichage de message d'erreur
function afficherMessageErreur(message) {
    let spanErreurMessage = document.getElementById("erreurMessage")

    if(!spanErreurMessage) {
        let popup = document.querySelector(".popup")
        spanErreurMessage = document.createElement("span")
        spanErreurMessage.id = "erreurMessage"

        popup.append(spanErreurMessage)
    } 

    spanErreurMessage.innerText = message
}

// pour la gestion du formulaire
function gererFormulaire(scoreEmail) {

    try {
        let nomForm = document.getElementById("nom").value
        validerNom(nomForm)
        let emailForm = document.getElementById("email").value
        validerEmail(emailForm)
        
        afficherMessageErreur("")
        afficherEmail(nomForm, emailForm, scoreEmail)

    } catch (error) {
         // gestion d'erreur
         afficherMessageErreur(error.message)
    }
}

// fonction pour lancer le jeu (à appeler dans main.js)
function lancerJeu() {

    let score = 0
    let i = 0
    let listeProposition = listeMots // par défaut


    let monButton = document.getElementById("validerMot")
    let monSaisi = document.getElementById("inputEcriture")

    afficherProposition(listeProposition[i])

    monButton.addEventListener("click", () => {
        console.log(monSaisi.value)
        
        if(monSaisi.value === listeProposition[i]) {
            score++
        }

        i++
        afficherResultat(score, i)
        monSaisi.value = ''
        if(listeProposition[i] === undefined) {
            afficherProposition("le Jeu est fini !")
            monButton.disabled = true
        } else {
            afficherProposition(listeProposition[i])
        }
    })

    let listeButton = document.querySelectorAll(".optionSource input")
    for(let j = 0; j < listeButton.length; j++) {
        listeButton[j].addEventListener("change", (event) => {
            console.log(event.target.value)
            if(event.target.value === "1") {
                listeProposition = listeMots
            } else {
                listeProposition = listePhrases
            }
            afficherProposition(listeProposition[i])
        })
    }

    initAddEventListenerPopup()

    let form = document.querySelector("form")
    form.addEventListener("submit", (event) => {
        // empêcher le comportement par défaut de submit (rechargement automatique de la page)
        event.preventDefault()
        let scoreEmail = `${score} / ${i}`
        gererFormulaire(scoreEmail)
    })

    afficherResultat(score, i)
}
