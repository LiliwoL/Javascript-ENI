class Personnage{
    constructor (nom, pv){
        this.nom = nom;
        this.pv = pv;
    }

    afficher(){
        console.log( 'Je m\'appelle ${this.nom} et j\ai ${this.pv} points de vie');
    }
}

class Magicien extends Personnage{
    constructor (nom, pv, pmagie){
        super(nom, pv);
        this.pmagie = pmagie;
    }

    afficher(){
        console.log( "Je m'appelle %s et j'ai %s points de vie et %s points de magie", this.nom, this.pv, this.pmagie);
    }
}

class Voleur extends Personnage{
    constructor (nom, pv, enPrison){
        super(nom, pv);
        this.enPrison = enPrison;
    }

    afficher(){
        console.log( "Je m'appelle %s et j'ai %s points de vie et je suis en prison: %s", this.nom, this.pv, this.enPrison);
    }
}

let merlin = new Magicien("Merlin", 100, 666);
console.log(merlin);
merlin.afficher();

let lupin = new Voleur("Lupin", 14, false);
lupin.afficher();

console.log(lupin);