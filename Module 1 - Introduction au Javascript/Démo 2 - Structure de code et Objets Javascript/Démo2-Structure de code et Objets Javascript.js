//EXEMPLE 1
//PROGRAMME PRINCIPAL
try {
    var phrase = "une phrase avec des consonnes et des voyelles";
    var compteurVoyelles = 0;
    var nombreA = 0;
    var nombreE = 0;
    for (let lettre of phrase) {
        if (estVoyelle(lettre)) {
            console.log("la voyelle '%s' est présente", lettre);
            compteurVoyelles++;
            switch (lettre) {
                case 'a' :
                    nombreA++;
                    break;
                case 'e' :
                    nombreE++
                    break;
            }
        }
    }
    console.log("Il y a %i voyelles", compteurVoyelles);
    console.log("il y a %i a", nombreA);
    console.log("il y a %i e", nombreE);
    console.log("il y a %i consonnes", phrase.replace(/ /g, '').length - compteurVoyelles);
    console.log(uneErreurGrossiere);
}
catch(e)
{
    console.log("une erreur est survenue : " + e);
}

function estVoyelle(lettre)
{
    if(lettre!=undefined && "aeiouy".indexOf(lettre)>=0)
    {
        return true;
    }
    return false;
}

//EXEMPLE 2
//PROGRAMME PRINCIPAL
var nombreReel = Math.random()*100;
console.log(nombreReel);
//Avoir une valeur entière
var nombreEntier = parseInt(nombreReel);
console.log(nombreEntier);

//EXEMPLE 3
//PROGRAMME PRINCIPAL
var noel2018 = new Date(2018,11,25);
console.log(noel2018);
console.log(noel2018.toLocaleDateString());
console.log(noel2018.getDate());
console.log(noel2018.getMonth()+1);
console.log(noel2018.getFullYear());