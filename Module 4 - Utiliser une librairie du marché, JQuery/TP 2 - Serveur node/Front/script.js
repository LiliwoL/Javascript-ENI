jQuery(document).ready(
    function ($) {
        // Ajout d'une classe truc
        $('#listeResultats').addClass('truc');

        // Ajout un comportement au bouton #boutonFetch
        $('#boutonFetch').on(
            "click",
            fonctionFetch
        );
    }
);

// Fonction appelée uniquement au clic sur le bouton #boutonFetch
function fonctionFetch(){
    console.log("On a cliqué sur le bouton");

    // Fetch
    if (window.fetch){
        fetch(
            "http://127.0.0.1:8080/api/items"
        )
            .then(
                (donneesRecues) => traiterDonnesRecues(donneesRecues)
            ) // Promesse tenue
            .catch(); // Promesse ratée
    }else{
        alert("La méthode Fetch n'existe pas!");
    }
}

// Fonction de rappel utilisée en cas de fetch réussi
function traiterDonnesRecues(data){
    console.log(data);
    // Afficher dans le DOM
}