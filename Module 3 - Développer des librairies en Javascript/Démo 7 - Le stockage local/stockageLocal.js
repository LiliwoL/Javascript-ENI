//Lecture/écriture d'une variable primitive
var prenom="Kylian";
//sauvegarder
localStorage.setItem("joueur", prenom);
//lire
var prenomLu = localStorage.getItem("joueur");
console.log(prenomLu);

//Lecture/écriture d'un tableau de primitives
var prenomsJoueurs = ["Hugo", "Olivier", "Kylian", "..."];
//sauvegarder
localStorage.setItem("joueurs", prenomsJoueurs);
//lire
var prenomsJoueursLus = localStorage.getItem("prenomsJoueurs");
console.log(prenomsJoueurs);

//Lecture/écriture d'un objet
var gardien = {prenom:"Hugo", nom:"Lloris"};
//sauvegarder
//localStorage.setItem("gardien",gardien);//NE MARCHE PAS
localStorage.setItem("gardien", JSON.stringify(gardien));
//lire
var gardienLu = localStorage.getItem("gardien");
console.log(gardienLu);
var objetGardienLu = JSON.parse(localStorage.getItem("gardien"));
console.log(objetGardienLu);

//Lecture/écriture d'un objet issu d'une classe
var Joueur = function (nom, prenom, poste) {
    this.nom=nom;
    this.prenom=prenom;
    this.poste=poste;
}
Joueur.prototype.getDescription = function(){
    return this.prenom+" "+this.nom+" ["+this.poste+"]";
}

var pavard = new Joueur("PAVARD","Benjamin","Défenseur");
console.log(pavard);
console.log(pavard.getDescription());

//sauvegarder
localStorage.setItem("pavard", JSON.stringify(pavard));
//lire
var pavardLu = JSON.parse(localStorage.getItem("pavard"));
console.log(pavardLu);
//console.log(pavardLu.getDescription());//Ne fonctionne pas car pas du type Joueur
//Réassocier le type Joueur
Object.setPrototypeOf(pavardLu,Joueur.prototype);
console.log(pavardLu);
console.log(pavardLu.getDescription());