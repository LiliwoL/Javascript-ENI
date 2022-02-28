//Déclarations de variables en TypeScript
var unBooleen = true;
var age = 25;
var profession = "Informaticien";
//La syntaxe Javascript est possible
var uneVariable = 10;
//Préferez la syntaxe suivante :
var uneAutreVariable = 10;
uneAutreVariable = "dix";
//Enuméré
var Etablissement;
(function (Etablissement) {
    Etablissement[Etablissement["Maternelle"] = 0] = "Maternelle";
    Etablissement[Etablissement["Primaire"] = 1] = "Primaire";
    Etablissement[Etablissement["College"] = 2] = "College";
    Etablissement[Etablissement["Lycee"] = 3] = "Lycee";
    Etablissement[Etablissement["Faculte"] = 4] = "Faculte";
})(Etablissement || (Etablissement = {}));
;
var etablissement = Etablissement.Maternelle;
//afficher
console.log(unBooleen);
console.log(age);
console.log(profession);
console.log(uneVariable);
console.log(uneAutreVariable);
console.log(etablissement);
