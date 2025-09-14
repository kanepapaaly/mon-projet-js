

// fonction permettant d'afficher le popup pour partager son score
function afficherPopup() {
    let popupBackground = document.querySelector(".popupBackground")
    // activer son display en lui rajoutant "active" dans la liste de ces classes
    popupBackground.classList.add("active")
}

// fonction permettant de cacher le popup pour partager son score
function cacherPopup() {
    let popupBackground = document.querySelector(".popupBackground")
    // désactiver son display en lui supprimant "active" dans la liste de ces classes
    popupBackground.classList.remove("active")
}

// initialiser les écouteurs d'événements concernant l'affichage de la popup
function initAddEventListenerPopup() {

    let btnPartager = document.querySelector(".zonePartage button")
    let popupBackground = document.querySelector(".popupBackground")

    btnPartager.addEventListener("click", () => {
        afficherPopup()
    })

    popupBackground.addEventListener("click", (event) => {
        // si on a cliqué précisément sur le popu
        if(event.target === popupBackground) {
            // alors on cache la popup
            cacherPopup()
        }
    })
}
