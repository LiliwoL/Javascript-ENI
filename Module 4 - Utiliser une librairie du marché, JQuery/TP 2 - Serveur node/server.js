const fs = require('fs');
var express = require('express');
var router = express();

router.get('/api/items', (req, res) => {
    fs.readFile('./data/db.json', (err, json) => {
        let obj = JSON.parse(json);
        res.json(obj);
    });
});

router.listen(8080);