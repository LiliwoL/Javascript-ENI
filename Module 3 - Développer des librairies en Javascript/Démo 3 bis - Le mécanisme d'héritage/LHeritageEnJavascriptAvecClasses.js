/**
 * Class Sport mère
 */
class Sport{
    constructor(nom, description){
        this.nom = nom || "";
        this.description = description || "";
    }

    afficher(){
        return this.nom + " " + this.description;
    }
}

/**
 * Class SportDeCompétition fille
 */
class SportDeCompetition extends Sport{
    constructor(nom, description, niveau){
        super(nom, description);
        this.niveau = niveau || "";
    }

    afficher() {
        //Appel de la fonction du parent
        return super.afficher()+ " " + this.niveau;
    }
}

var sportDeCompetition = new SportDeCompetition("Tennis", "Sport de raquette","Regionale");

console.log(sportDeCompetition.afficher());

//Modification du parent
Sport.prototype.jouer = function () {
    console.log("Allez-y, jouez!!");
};

sportDeCompetition.jouer();

//Substitution de fonction
SportDeCompetition.prototype.jouer = function(){console.log("C'est parti!!")};

sportDeCompetition.jouer();


