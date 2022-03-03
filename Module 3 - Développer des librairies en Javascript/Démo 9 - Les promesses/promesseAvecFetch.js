// On va utiliser une promesse renvoyée par fetch

if (window.fetch) {
    // exécuter ma requête fetch ici
    fetch("https://my.api.mockaroo.com/savoirs_inutiles.json?key=ec91eef0")
        .then(function(response) {
            response.json()
                .then(
                    function (response){
                        console.log("Good!");
                        console.log(response)
                    }
                )
                .catch(function(error) {
                    console.log('Il y a eu un problème avec l\'opération fetch: ' + error.message);
                });
        });
} else {
    // Faire quelque chose avec XMLHttpRequest?
}

