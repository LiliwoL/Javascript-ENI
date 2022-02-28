//Fonction anonyme dans une variable
var fonctionAnonyme = function(){
    console.log("bonjour");
}

fonctionAnonyme();

var fonctionAnonymeAvecParametre = function(param){
    console.log(param);
}

fonctionAnonymeAvecParametre("coucou");

//Fonction anonyme auto-appelée
(
    function()
    {
        console.log("Fonction anonyme auto-appelée")
    }
)();

(
    function(param)
    {
        console.log(param);
    }
)("au revoir");