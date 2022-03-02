/////////////////////////////////////////////////////////////////////////////
//PARTIE SERVICE/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

// Dans cette partie, on dispose de fonctions pour gérer le tableau des savoirs et traiter le localStorage
var savoirsInutiles = [];

// Méthode nettoyée
function supprimerSavoir(id)
{
    console.log("Id à trouver " + id);

    // Recherche de l'élément du tableau qui a l'id passé en paramètre
    savoirASupprimer = savoirsInutiles.find(element => element.id === id);

    console.log("savoirASupprimer");
    console.log(savoirASupprimer);

    // Suppression dans le tableau
    savoirsInutiles.splice(savoirsInutiles.indexOf(savoirASupprimer),1);

    // Ajout du tableau dans localStorage
    serviceLocalStorage.supprimer(savoirsInutiles);
}

// Ajout du savoir dans le tableau eT dans le localStorage
function ajouterSavoir(savoirAAjouter)
{
    savoirsInutiles.push(savoirAAjouter);

    // Ajout du tableau dans le storage
    serviceLocalStorage.ajouter(savoirsInutiles);
}

function trierSavoirs(type)
{
    switch (type) {
        case 'a_az':
            savoirsInutiles.sort((siA,siB)=>siA.auteur.localeCompare(siB.auteur));
            break;
        case 'a_za':
            savoirsInutiles.sort((siA,siB)=>siB.auteur.localeCompare(siA.auteur));
            break;
        case 'd_ra':
            savoirsInutiles.sort((siA,siB)=>siA.dateDecouverte-siB.dateDecouverte);
            break;
        case 'd_ar':
            savoirsInutiles.sort((siA,siB)=>siB.dateDecouverte-siA.dateDecouverte);
            break;
        default:
            break;
    };
}


function generateUID() {
    // I generate the UID from two parts here
    // to ensure the random number provide enough bits.
    var firstPart = (Math.random() * 46656) | 0;
    var secondPart = (Math.random() * 46656) | 0;
    firstPart = ("000" + firstPart.toString(36)).slice(-3);
    secondPart = ("000" + secondPart.toString(36)).slice(-3);
    return firstPart + secondPart;
}