var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Déclaration d'une classe en TypeScript
var Sport = /** @class */ (function () {
    function Sport(nom, description) {
        this.description = description;
        this.nom = nom;
        this.prive = "valeur cachée";
    }
    Sport.prototype.afficher = function () {
        console.log(this.nom + " " + this.description);
    };
    return Sport;
}());
//Création un objet de type Sport
var sport = new Sport("Squash", "Un sport de raquette");
sport.afficher();
//Héritage
var SportDeCompetition = /** @class */ (function (_super) {
    __extends(SportDeCompetition, _super);
    function SportDeCompetition(nom, description, niveau) {
        var _this = _super.call(this, nom, description) || this;
        _this.niveau = niveau;
        return _this;
    }
    SportDeCompetition.prototype.afficher = function () {
        _super.prototype.afficher.call(this);
        console.log("Niveau : " + this.niveau);
    };
    return SportDeCompetition;
}(Sport));
//Création d'un objet du type SportDeCompetition
var sportDeCompetition = new SportDeCompetition("Tennis", "Un jeu de raquettes", "International");
sportDeCompetition.afficher();
var SportJouable = /** @class */ (function (_super) {
    __extends(SportJouable, _super);
    function SportJouable() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SportJouable.prototype.jouer = function (joueur1, joueur2) {
        var vainqueur = joueur1;
        if (Math.floor(Math.random() * Math.floor(2)) == 0) {
            vainqueur = joueur2;
        }
        return vainqueur;
    };
    return SportJouable;
}(Sport));
var sportJouable = new SportJouable("Badminton", "Un sport fatigant");
console.log("Le vainqueur est : " + sportJouable.jouer("Batman", "Superman"));
var jouerAuBadminton = function (joueur1, joueur2) {
    console.log(joueur1 + " et " + joueur2 + " joue au badminton");
    return joueur1;
};
console.log("Le vainqueur est " + jouerAuBadminton("Thierry", "Anthony"));
