//Déclaration d'une classe en TypeScript
class Sport
{
    public nom : string;
    private prive : string;

    constructor(nom: string, public description: string)
    {
        this.nom=nom;
        this.prive="valeur cachée";
    }

    public afficher():void
    {
        console.log(this.nom+" "+this.description);
    }
}

//Création un objet de type Sport
var sport : Sport = new Sport("Squash","Un sport de raquette");
sport.afficher();

//Héritage
class SportDeCompetition extends Sport
{
    constructor(nom:string, description:string, public niveau:string)
    {
        super(nom, description);
    }

    public afficher():void
    {
        super.afficher();
        console.log("Niveau : " + this.niveau);
    }
}

//Création d'un objet du type SportDeCompetition
var sportDeCompetition: SportDeCompetition =
    new SportDeCompetition("Tennis", "Un jeu de raquettes", "International");
sportDeCompetition.afficher();

//Interface
interface Jouable {
    //propriété ooptionnelle
    score? : string;
    jouer(joueur1:string, joueur2:string):string
}

class SportJouable extends Sport implements Jouable
{
    jouer(joueur1: string, joueur2: string): string {
        var vainqueur = joueur1;
        if(Math.floor(Math.random()*Math.floor(2))==0)
        {
            vainqueur=joueur2;
        }
        return vainqueur;
    }
}

var sportJouable : Jouable = new SportJouable("Badminton", "Un sport fatigant");
console.log("Le vainqueur est : " + sportJouable.jouer("Batman", "Superman"));

//Interface de méthode
interface jouer{
    (joueur1:string, joueur2:string):string
}
var jouerAuBadminton : jouer = function (joueur1:string, joueur2:string):string {
    console.log(joueur1 + " et " + joueur2 + " joue au badminton");
    return joueur1;
}

console.log("Le vainqueur est " + jouerAuBadminton("Thierry", "Anthony"));