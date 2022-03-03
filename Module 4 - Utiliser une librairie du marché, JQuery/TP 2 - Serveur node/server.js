// TP

// Ici, on va créer un serveur avec Node js

// Ce serveur va avoir besoin de lire un fichier avec le module fs (file System)
const fs = require('fs');

// Ce serveur va utiliser la librairie Express qui permet de faire un serveur Web
// Il aura fallu au préalable installer la dépendance
var express = require('express');
var router = express();

router.get('/api/items', (req, res) => {
    fs.readFile('./data/db.json', (err, json) => {
        let obj = JSON.parse(json);
        res.json(obj);
    });
});

router.listen(8080);