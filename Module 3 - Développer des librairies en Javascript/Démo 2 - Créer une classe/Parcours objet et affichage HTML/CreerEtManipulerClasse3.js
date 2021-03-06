// Objet dynamique
let eleves = [{
    "id": 1,
    "firstname": "Tammie",
    "lastname": "Growcott",
    "age": 31,
    "image": "https://robohash.org/utametet.bmp?size=50x50&set=set1",
    "biography": 5
}, {
    "id": 2,
    "firstname": "Gifford",
    "lastname": "Sturch",
    "age": 94,
    "image": "https://robohash.org/quisofficiaaut.png?size=50x50&set=set1",
    "biography": 1
}, {
    "id": 3,
    "firstname": "Meir",
    "lastname": "Hullah",
    "age": 100,
    "image": "https://robohash.org/minimaametex.jpg?size=50x50&set=set1",
    "biography": 3
}, {
    "id": 4,
    "firstname": "Leonore",
    "lastname": "Whitworth",
    "age": 54,
    "image": "https://robohash.org/veritatisvelitaque.jpg?size=50x50&set=set1",
    "biography": 2
}, {
    "id": 5,
    "firstname": "Rafael",
    "lastname": "Artrick",
    "age": 66,
    "image": "https://robohash.org/utassumendasint.bmp?size=50x50&set=set1",
    "biography": 1
}, {
    "id": 6,
    "firstname": "Kittie",
    "lastname": "Blumer",
    "age": 52,
    "image": "https://robohash.org/repellatnecessitatibusqui.jpg?size=50x50&set=set1",
    "biography": 1
}, {
    "id": 7,
    "firstname": "Dexter",
    "lastname": "Gaunt",
    "age": 20,
    "image": "https://robohash.org/quoddistinctioet.bmp?size=50x50&set=set1",
    "biography": 1
}, {
    "id": 8,
    "firstname": "Moritz",
    "lastname": "Spirit",
    "age": 64,
    "image": "https://robohash.org/eossuntvoluptatum.png?size=50x50&set=set1",
    "biography": 1
}, {
    "id": 9,
    "firstname": "Gibby",
    "lastname": "Barfoot",
    "age": 18,
    "image": "https://robohash.org/voluptatemnihildistinctio.bmp?size=50x50&set=set1",
    "biography": 2
}, {
    "id": 10,
    "firstname": "Denyse",
    "lastname": "Aldrin",
    "age": 3,
    "image": "https://robohash.org/dictarerumlaudantium.bmp?size=50x50&set=set1",
    "biography": 1
}];

// Parcours du tableau et Affichage dans le dom

// 1. Parcours du tableau
// Choisissez votre boucle
// eleves.forEach( eleve => console.log(eleve));
// for (let eleve of eleves)

// 2. A chaque it??ration ajouter un li dans le ul
// 2.1 S??lection de l'??l??ment ul
// document.getElementById

// 2.2 Cr??ation de l'??l??ment li
// document.createElement

// 2.3 Affectation de la valeur ?? li
// 2.4 Ajout de li dans ul



// ************************************************
// **** Corrig?? **
// 1. Parcours du tableau
eleves.forEach( eleveEnCours => ajoutEleve(eleveEnCours) );

// 2. A chaque it??ration ajouter un li dans le ul
function ajoutEleve(eleve){
    // 2.1 S??lection de l'??l??ment ul
    let ul = document.getElementById("listeEleves");

    // 2.2 Cr??ation de l'??l??ment li
    let li = document.createElement("li");

    // 2.3 Affectation de la valeur ?? li
    let p = document.createElement("p");
    p.innerHTML = eleve.firstname + " " + eleve.lastname;

    let img = document.createElement("img");
    img.setAttribute("src", eleve.image);

    li.appendChild(p);
    li.appendChild(img);

    // 2.4 Ajout de li dans ul
    ul.appendChild(li);
}