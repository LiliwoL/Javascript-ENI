//Déclarations de variables en TypeScript
var unBooleen : boolean = true;
var age : number = 25;
var profession : string ="Informaticien";
//La syntaxe Javascript est possible
var uneVariable = 10;
//Préferez la syntaxe suivante :
var uneAutreVariable : any = 10;
uneAutreVariable="dix";

//Enuméré
enum Etablissement{Maternelle, Primaire, College, Lycee, Faculte};
var etablissement : Etablissement = Etablissement.Maternelle;

//afficher
console.log(unBooleen);
console.log(age);
console.log(profession);
console.log(uneVariable);
console.log(uneAutreVariable);
console.log(etablissement);