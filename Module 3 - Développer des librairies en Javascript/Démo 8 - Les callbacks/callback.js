//Fonction déclenchant un traitement asynchrone
function enregistrer(data, callback, callback2)
{
    console.log("J'enregistre des informations, ça peut prendre du temps");
    setTimeout(function(){callback("Succès de la sauvegarde")},1000);
    setTimeout(function(){callback2("Succès de la sauvegarde 2")},2000);
}

//Fonction appelée à la fin du traitement asynchrone
function afficherResultat(message)
{
    if(message)console.log("Message : %s", message);
    else console.log("Aucun message");
}

function autreFonction(){
    console.log("Deuxieme callback");
}

enregistrer("mes datas", afficherResultat, autreFonction);
console.log("pendant ce temps, la vie continue...");