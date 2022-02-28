/////////////////////////////////////////////////////////////////////////////
//PARTIE METIER//////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
var SavoirInutile = function(savoir, auteur, dateDecouverte)
{
    this.savoir = savoir || "";
    this.auteur = auteur || "";
    this.dateDecouverte = dateDecouverte || new Date();
}

SavoirInutile.prototype.toutEstSaisie = function() {
    return this.savoir!="" && this.auteur!="" && this.dateSaisie!="";
}

SavoirInutile.prototype.informations = function(){
    var jour = this.dateDecouverte.getDate().toString().padStart(2, "0");
    var mois = (this.dateDecouverte.getMonth() + 1).toString().padStart(2, "0");
    var annee = this.dateDecouverte.getFullYear();
    return `Par ${this.auteur}, le ${jour}/${mois}/${annee}`;
}

/////////////////////////////////////////////////////////////////////////////
//PARTIE SERVICE/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
var savoirsInutiles = [];

function ajouterSavoir(savoirAAjouter)
{
    savoirsInutiles.push(savoirAAjouter);
}

function supprimerSavoir(index)
{
    savoirsInutiles.splice(index,1);
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
function initialiserFormulaire()
{
    var savoirInutile = new SavoirInutile();
    document.getElementById("libelleSavoir").value=savoirInutile.auteur;
    document.getElementById("auteur").value=savoirInutile.savoir;
    document.getElementById("date").valueAsDate=savoirInutile.dateDecouverte;
    document.getElementById("libelleSavoir").focus();
}

function effacerSavoirs()
{
    var olSavoir = document.getElementById("olListeSavoir");
    olSavoir.innerHTML="";
}

function afficherSavoirs()
{
    effacerSavoirs();

    var olSavoir = document.getElementById("olListeSavoir");

    savoirsInutiles.forEach((value, index, array)=>
        {
            var liSavoir = document.createElement("li");
            var pSavoir = document.createElement("p");
            var pInfos = document.createElement("p");
            pSavoir.className = "savoir";
            pInfos.className = "infos";
            liSavoir.addEventListener("click", supprimer);

            liSavoir.id=index;
            pSavoir.innerText = value.savoir;
            pInfos.innerText = value.informations();

            olSavoir.appendChild(liSavoir);
            liSavoir.appendChild(pSavoir);
            liSavoir.appendChild(pInfos);
        }
    )
}

function ajouter() {
    var savoirInutile = new SavoirInutile(document.getElementById("libelleSavoir").value,
                                        document.getElementById("auteur").value,
                                        document.getElementById("date").valueAsDate);

    if (savoirInutile.toutEstSaisie()) {
        ajouterSavoir(savoirInutile);
        afficherSavoirs();
        initialiserFormulaire();
    }
    else {
        alert("Tous les champs sont obligatoires");
    }
}

function supprimer(event)
{
    var index = event.currentTarget.id;
    if(confirm(`Voulez-vous supprimer le savoir "${savoirsInutiles[index].savoir}"?`))
    {
        supprimerSavoir(index);
        afficherSavoirs();
        initialiserFormulaire();
    }
}

function trier(type)
{
    trierSavoirs(type);
    afficherSavoirs();
}