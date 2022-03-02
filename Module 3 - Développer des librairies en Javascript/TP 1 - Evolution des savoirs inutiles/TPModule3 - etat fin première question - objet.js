//TP : le savoir inutile
//http://www.topito.com/top-infos-insolites-corps-humain
/*
* 1- Faire évoluer l'application en manipulant les concepts objets
* 2- Gérer un tableau de savoirs inutiles pour permettre de trier l'affichage
* par ordre alphabétique sur l'auteur et par ordre chronologique sur la date
*/
/////////////////////////////////////////////////////////////////////////////
//PARTIE METIER//////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

// Dans cette partie, on définit la classe SavoirInutile
class SavoirInutile{

    // On pourrait vérifier les données au moment de la construction, ce n'est pas le cas ici, on utilise des valeurs par défaut
    constructor(savoir, auteur, dateDecouverte) {
        this.savoir = savoir || "";
        this.auteur = auteur || "";
        this.dateDecouverte = dateDecouverte || new Date();
    }

    // Méthode de vérification
    toutEstSaisi(){
        return this.savoir!="" && this.auteur!="" && this.dateSaisie!="";
    }

    // Méthode d'affichage des données de l'objet en cours
    informations(){
        var jour = this.dateDecouverte.getDate().toString().padStart(2, "0");
        var mois = (this.dateDecouverte.getMonth() + 1).toString().padStart(2, "0");
        var annee = this.dateDecouverte.getFullYear();
        return `Par ${this.auteur}, le ${jour}/${mois}/${annee}`;
    }

    // Méthode pour ajouter cet objet dans le DOM
    ajouterDansLeDom(){
        // Création des éléments  qui SERONT lancés dans le DOM
        var liSavoir = document.createElement("li");
        var pSavoir = document.createElement("p");
        var pInfos = document.createElement("p");

        // On ajoute les données à ces éléments
        pSavoir.innerText = this.savoir;
        pInfos.innerText = this.informations();

        // On leur ajoute aussi des classes
        pSavoir.className = "savoir";
        pInfos.className = "infos";

        // On ajoute enfin un évenement click
        liSavoir.addEventListener("click", supprimer);

        // Ajout REEL dans le DOM
        var olSavoir = document.getElementById("olListeSavoir");
        olSavoir.appendChild(liSavoir);
        liSavoir.appendChild(pSavoir);
        liSavoir.appendChild(pInfos);
    }
}


/////////////////////////////////////////////////////////////////////////////
//PARTIE SERVICE/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

// Dans cette partie, on dispose de fonctions pour gérer le tableau des savoirs
var savoirsInutiles = [];

function supprimerSavoir(index)
{
    savoirsInutiles.splice(index,1);
}

function ajouterSavoir(savoirAAjouter)
{
    savoirsInutiles.push(savoirAAjouter);
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

/////////////////////////////////////////////////////////////////////////////
//PARTIE CONTROLEUR//////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

// Dans cette partie, on dispose de fonctions appelées suite aux actions de l'utilisateur
// Fonction appelée au clic du bouton
function ajouter() {
    // Lecture des données du formulaire
    let libelleSavoir = document.getElementById("libelleSavoir").value;

    // ET instanciation d'un nouveau SavoirInutile
    var savoirInutile = new SavoirInutile(libelleSavoir,
                                        document.getElementById("auteur").value,
                                        document.getElementById("date").valueAsDate);

    // Vérification des données
    if (savoirInutile.toutEstSaisi())
    {
        // Ajout du savoir dans le tableau
        ajouterSavoir(savoirInutile);

        // Appel de la méthode d'ajout dans le dom
        savoirInutile.ajouterDansLeDom();
    }
    else {
        alert("Tous les champs sont obligatoires");
    }
}

// Fonction appelée au CLIC d'un élément LI
// Ici on utilise event comme paramètre pour récupérer la cible de l'événement
function supprimer(event)
{
    console.log(event.currentTarget);
    var savoir = event.currentTarget.getElementsByTagName("p")[0].innerText
    if(confirm(`Voulez-vous supprimer le savoir "${savoir}"?`))
    {
        event.currentTarget.parentNode.removeChild(event.currentTarget);
    }
}

// Vidage de la liste
function effacerSavoirs()
{
    var olSavoir = document.getElementById("olListeSavoir");
    olSavoir.innerHTML="";
}

// Parcours du tableau des savoirs
function afficherSavoirs()
{
    effacerSavoirs();

    // Notez la syntaxe du forEach
    savoirsInutiles.forEach((value, index, array)=>
        {
            value.ajouterDansLeDom();
        }
    )
}

function trier(type)
{
    trierSavoirs(type);
    afficherSavoirs();
}