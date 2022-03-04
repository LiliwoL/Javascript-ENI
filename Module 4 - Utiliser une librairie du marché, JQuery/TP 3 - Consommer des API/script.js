jQuery(document).ready(
    function ($) {
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
            "https://data.angers.fr/api/records/1.0/search/?dataset=patri_hist_merimee&q=&facet=datbati1&facet=etat"
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
    //console.log(data);

    // On doit sélectionner directement le tableau records
    data = data.records

    // Ajout d'un table dans #listeResultats
    $('#listeResultats').append(
        $('<table></table>').addClass("table table-hover")
    );

    data.forEach( element => ajoutDansLeDom(element));
}

function ajoutDansLeDom(data){

    console.log(data);
    // On ne veut que les données du tabelau fields
    data = data.fields;

    // Création d'un élément tr
    let tr = $('<tr></tr>');
    // Ajout des td
    tr.append(
        $('<td>' + data.tico + '</td>')
    );

    tr.append(
        $('<td>' + data.datbati1 + '</td>')
    );

    tr.append(
        $('<td>' + data.adrs + '</td>')
    );

    tr.append(
        $('<td>' + data.geo_point_2d + '</td>')
    );

    // Sélection du tableau dans #listeResultats
    $('#listeResultats table').append(tr);
}