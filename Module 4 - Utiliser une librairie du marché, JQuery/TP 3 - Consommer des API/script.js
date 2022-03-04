jQuery(document).ready(
    function ($) {
        // Ajout un comportement au bouton #boutonFetch
        $('#boutonFetch').on(
            "click",
            fonctionFetch
        );
    }
);

/*
    L'affichage d'une carte nécessite:
    1. d'avoir chargé la librairie leaflet ET son CSS
    2. d'avoir ajouté un élément container dans le HTML
        <div id="map"></div>
    3. d'avoir spécifié une hauteur par défaut à cet élément container (sinon, vous ne le verrez pas s'afficher!)
        <style>
            #map { height: 500px; }
        </style>
    4. Charger la carte dans l'élément container
        var map = L.map('map').setView([47.468700, -0.558810], 13);
    5. Ajouter à cette carte une couche de tuile ( tileLayer)
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; Formation ENI Javascript'
        }).addTo(map);

 */
// Affichage de la carte
var map = L.map('map').setView([47.468700, -0.558810], 15);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; Formation ENI Javascript'
}).addTo(map);



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
    //console.log(typeof data);

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


    // Ajout du marker dans la table
    // https://leafletjs.com/SlavaUkraini/examples/custom-icons/
    L.marker([data.geo_point_2d[0], data.geo_point_2d[1]])
        .addTo(map)
        .bindPopup("<b>" + data.tico + "</b><br/>" + data.adrs);
}