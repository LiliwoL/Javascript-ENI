/////////////////////////////////////////////////////////////////////////////
//PARTIE SERVICE/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

// Dans cette partie, on dispose de fonctions pour gérer le tableau des savoirs
var savoirsInutiles = [];

function supprimerSavoir(id)
{
    console.log("Id à trouver " + id);
    savoirASupprimer = savoirsInutiles.find(element => element.id = id);

    console.log("savoirASupprimer");
    console.log(savoirASupprimer);

    // Suppressiond ans le tableau
    savoirsInutiles.splice(savoirsInutiles.indexOf(savoirASupprimer),1);

    // Ajout du tableau dans localStorage
    serviceLocalStorage.supprimer(savoirsInutiles);
}

function ajouterSavoir(savoirAAjouter)
{
    savoirsInutiles.push(savoirAAjouter);

    // Ajout du tableau dans
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