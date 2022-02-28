//Créer une classe par la définition de son constructeur
var Sport = function(nom, description){
    //définition des attributs
    this.nom = nom || "pas de nom";
    this.description = description || "";

    //définition des fonctions
    this.afficher = function(){
        console.log(`${this.nom} ${this.description}`);
    }
}

//Déclaration et création d'objets de type Sport:
var sport = new Sport("squash", "un jeu de raquettes");
var sport2 = new Sport("football", "un jeu de ballon");
sport.afficher();
sport2.afficher();
console.log(sport);