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
            "http://127.0.0.1:8080/api/search?term=running"
        )
            .then(
                (donneesRecues) => {
                    donneesRecues.json()
                        .then(
                            (donnesTransformeesEnJson) => traiterDonnesRecues(donnesTransformeesEnJson)
                        )
                        .catch()
                }
            ) // Promesse tenue
            .catch(); // Promesse ratée
    }else{
        alert("La méthode Fetch n'existe pas!");
    }
}

// Fonction de rappel utilisée en cas de fetch réussi
function traiterDonnesRecues(data){
    console.log(typeof data);

    // Afficher dans le DOM
    console.log(data);

    // On doit sélectionner directement le tableau Search
    data = data.Search

    // Ajout d'un table dans #listeResultats
    $('#listeResultats').append(
        $('<table></table>').addClass("table table-hover")
    );

    data.forEach( element => ajoutDansLeDom(element));
}

function ajoutDansLeDom(data){
    // Création d'un élément tr
    let tr = $('<tr></tr>');
    // Ajout des td
    tr.append(
        $('<td>' + data.Title + '</td>')
    );

    tr.append(
        $('<td>' + data.Year + '</td>')
    );

    tr.append(
        $('<td>' + data.imdbID + '</td>')
    );

    tr.append(
        $('<td><img src="' + data.Poster + '"></td>')
    );

    // Sélection du tableau dans #listeResultats
    $('#listeResultats table').append(tr);
}