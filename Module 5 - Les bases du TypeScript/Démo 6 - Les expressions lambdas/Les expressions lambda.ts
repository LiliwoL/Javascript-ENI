//Déclarer une fonction classique
var donneMoiUnEntier = function(){
    return Math.floor(Math.random()*10);
}
console.log(donneMoiUnEntier());

//Première syntaxe d'expression lambda
var donneMoiUnEntierV2 = ()=>{return Math.floor(Math.random()*10);};
console.log(donneMoiUnEntierV2());

//Deuxième syntaxe d'expression lambda
var donneMoiUnEntierV3 = ()=> Math.floor(Math.random()*10);
console.log(donneMoiUnEntierV3());

//Cas concret
var tableau : Array<number> = [1,2,5,6,9];
tableau.forEach(function (value, index) {
    console.log("tableau[%i]=%i", index, value);
});
tableau.forEach((value, index, tab)=>console.log("_tableau_[%i]=%i", index, value));
