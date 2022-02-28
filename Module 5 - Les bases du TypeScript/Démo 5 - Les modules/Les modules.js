//Création d'un module
var BusinessObject;
(function (BusinessObject) {
    //...
    var Sport = /** @class */ (function () {
        function Sport(nom, description) {
            this.nom = nom;
            this.description = description;
        }
        Sport.prototype.afficher = function () {
            console.log(this.nom + " " + this.description);
        };
        return Sport;
    }());
    BusinessObject.Sport = Sport;
})(BusinessObject || (BusinessObject = {}));
var sportModule = new BusinessObject.Sport("Football", "Sport de ballon");
sportModule.afficher();
var BO = BusinessObject;
var sportAlias = BO.Sport;
