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

    //data.forEach...
}
