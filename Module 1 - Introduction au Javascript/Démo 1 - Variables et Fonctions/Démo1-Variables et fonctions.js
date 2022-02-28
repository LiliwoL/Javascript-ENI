//Un commentaire sur une ligne
/*
Des commentaires
sur plusieurs lignes
*/
//PROGRAMME PRINCIPAL
var unNombre = 2;
var sonDouble = doubler(unNombre);
console.log("Le double de %i est %i", unNombre, sonDouble);

function doubler(unParametre)
{
    return unParametre*2;
}

//EXEMPLE 2
//PROGRAMME PRINCIPAL
var uneValeur = 2;//type défini dynamiquement (number)
uneValeur = "3";//changement de type (string)
console.log("uneValeur==3 => " +(uneValeur==3));
console.log("uneValeur===3 =>" +(uneValeur===3));

//EXEMPLE 3
//PROGRAMME PRINCIPAL
var unevariableGlobale="bonjour";
//La ligne suivante provoque une ReferenceError
//console.log("uneVariableNonDeclaree vaut '%s' dans le programme principal",uneVariableNonDeclaree);
traitement();
console.log("uneVariableLocaleSansVar vaut '%s' au niveau du programme principal", uneVariableLocaleSansVar);

//Fonction utilisé dans le programme principal
function traitement()
{
    var uneVariableLocale="coucou";
    console.log("uneVariableGlobale vaut '%s'", unevariableGlobale);
    console.log("uneVariableLocale vaut '%s'", uneVariableLocale);
    uneVariableLocaleSansVar = "au revoir";
    console.log("uneVariableLocaleSansVar vaut '%s'", uneVariableLocaleSansVar);
}

//EXEMPLE 4
//PROGRAMME PRINCIPAL
var uneVariableNonDefinie;
console.log(uneVariableNonDefinie);
console.log(uneVariableNonDefinie==undefined);