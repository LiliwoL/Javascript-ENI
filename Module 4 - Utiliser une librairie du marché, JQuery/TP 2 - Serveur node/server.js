// TP
// Ici, on va créer un serveur avec Node js

// Ce serveur prend en charge les urls suivantes
// /
// /api/items
// /api/search?term=xxxx

// Dépendances requises
// express
// cors
// axios

// Ce serveur va avoir besoin de lire un fichier avec le module fs (file System)
const fs = require('fs');

// Ce serveur va utiliser la librairie Express qui permet de faire un serveur Web
// Il aura fallu au préalable installer la dépendance
// npm install express --save
var express = require('express');
//var cors = require('cors')  //use this
var router = express();

//router.use(cors()) //and this

router.get(
    '/api/items', // L'url
    (req, res) =>
    {
        // On a accès à un objet req et res
        fs.readFile('./data/db.json', (err, json) => {
            let obj = JSON.parse(json);
            res.json(obj);
        });
    });

// On aura besoin de axios!
// npm install axios
router.get(
    '/api/search', // L'url
    (req, res) =>
    {
        // Récupération du paramètre passé dans l'url
        // http://......:8080/api/search?term=truc
        //console.log(req.query);
        let queryTitle = req.query.term;

        if (queryTitle != ""){
            const axios = require('axios');

            // Make a request for a user with a given ID
            axios.get('http://www.omdbapi.com/?apikey=b20c0d21&s=' + queryTitle)
                .then(function (response) {
                    // handle success
                    //console.log(response.data);
                    res.send(response.data);
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                    res.send("Error");
                })
                .then(function () {
                    // always executed
                });
        }
    });

// Gestion d'une route simple, et réponse toute simple
router.get(
    '/',
    (req, res) =>
    {
        res.send("<h1>Coucou</h1>");
    }
);

// Oné coute sur le port 8080
router.listen(8080);