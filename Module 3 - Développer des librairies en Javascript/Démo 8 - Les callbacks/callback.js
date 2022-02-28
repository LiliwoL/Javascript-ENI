//Fonction déclenchant un traitement asynchrone
function enregistrer(data, callback)
{
    console.log("J'enregistre des informations, ça peut prendre du temps");
    setTimeout(function(){callback("Succès de la sauvegarde")},1000);
}

//Fonction appelée à la fin du traitement asynchrone
function afficherResultat(message)
{
    if(message)console.log("Message : %s", message);
    else console.log("Aucun message");
}

enregistrer("mes datas", afficherResultat);
console.log("pendant ce temps, la vie continue...");