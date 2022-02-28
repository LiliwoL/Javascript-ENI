////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//TP du Module 1////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//TP Module 1:

//QUESTION 1
//A l'aide de la méthode Math.random, écrivez un algorithme qui s'arrête lorsque tous les nombres de la plage [0;100[ sont tirés au sort.
//Indiquer le nombre de tirage nécessaire.

//Proposition de correction

var entiersTires = [];
var nombreTirageNecessaire=0;

for(var i=0;i<100;i++)
{
    entiersTires.push(false);
}
var compteurEntierATirer=entiersTires.length;
do {
    var tirage = parseInt(Math.random()*100);
    if(entiersTires[tirage]===false)
    {
        entiersTires[tirage]=tirage;
        compteurEntierATirer--;
        //console.log(entiersTires);
        //console.log(compteurEntierATirer);
    }
    nombreTirageNecessaire++;
}while(compteurEntierATirer>0)
console.log(entiersTires);
console.log(nombreTirageNecessaire);


//QUESTION 2
//Trier les lettres de la phrase par ordre alphabétique.

//Proposition de correction

var chaine ="une chaine avec des lettres dans un certain ordre pour donner du sens";
var tableau = Array.from(chaine.replace(/ /g,''));
console.log(chaine);
console.log(tableau);
tableau.sort();
console.log(tableau);

//QUESTION 3
//Mettre en majuscule la première lettre de chaque mot de la phrase.

//Proposition de correction
var chaine = "une phrase sans majuscule";
var mots = chaine.split(/ /);
var resultat = "";
for(var i=0;i<mots.length;i++)
{
    resultat += (i>0?" ":"") + mots[i].substring(0,1).toUpperCase()+mots[i].substring(1);
}
console.log(resultat);