//Déclaration d'une classe mère
var Sport = function (nom, description){
    //Définition les attributs
    this.nom = nom || "pas de nom";
    this.description = description || "";

    //Définition des fonctions
    this.afficher = function(){console.log(`${this.nom} ${this.description}`);}
}

//Déclaration d'une classe fille
var SportDeCompetition = function(nom, description, niveau){
    //Appel du constructeur de la classe mère
    Sport.call(this, nom, description);
    //Définition des attributs propres
    this.niveau = niveau || "";
}

//Création d'un objet à partir de la classe fille
var sportDeCompetition = new SportDeCompetition("Pelote basque", "Un jeu qui fait pal à la main","Régional");
console.log(sportDeCompetition);
sportDeCompetition.afficher();

//Ajout de méthodes dans le prototype de la classe sport
Sport.prototype.jouer = function () {
    console.log("Allez-y, jouez!!");
}
SportDeCompetition.prototype = Object.create(Sport.prototype);

//Création d'un nouvel objet à partir de la classe fille
var sportDeCompetition2 = new SportDeCompetition("Rugby", "Un jeu de ballon ovale", "International");
console.log(sportDeCompetition2);
sportDeCompetition2.jouer();

//Substitution de fonction
SportDeCompetition.prototype.jouer = function(){console.log("C'est parti!!")};
sportDeCompetition2.jouer();


