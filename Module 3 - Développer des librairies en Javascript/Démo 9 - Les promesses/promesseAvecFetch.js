// On va utiliser une promesse renvoyée par fetch

if (window.fetch) {
    // exécuter ma requête fetch ici
    fetch("https://my.api.mockaroo.com/savoirs_inutiles.json?key=ec91eef0")
        .then(function(response) {
            //console.log(response);

            // On va devoir transformer la réponse en json
            response.json()
                .then(
                    //(body) => { console.log(body) }
                    (truc) => fonctionTraitement(truc)
                )
                .catch();
        })
        .catch((error) => console.log("Message d'erreur reçu: " + error));
} else {
    // Faire quelque chose avec XMLHttpRequest?
}

function fonctionTraitement ( data ){
    console.log( data );

    // Parcours du tableau reçu
    data.forEach( savoirEnCours => ajoutSavoir(savoirEnCours) );
}

function ajoutSavoir( savoir ){
    let olSavoir = document.getElementById('listeSavoirs');

    var liSavoir = document.createElement("li");
    var pSavoir = document.createElement("p");
    var pInfos = document.createElement("p");


    pSavoir.innerText = savoir.libelleSavoir;
    pInfos.innerText = `Par ${savoir.auteur}, le ${savoir.date}`;
    pSavoir.className = "savoir";
    pInfos.className = "infos";

    olSavoir.appendChild(liSavoir);
    liSavoir.appendChild(pSavoir);
    liSavoir.appendChild(pInfos);
}
