//TP : le savoir inutile
//http://www.topito.com/top-infos-insolites-corps-humain
/*
* 1- Faire évoluer l'application en manipulant les concepts objets
* 2- Gérer un tableau de savoirs inutiles pour permettre de trier l'affichage
* par ordre alphabétique sur l'auteur et par ordre chronologique sur la date
*/
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

function initialiserFormulaire()
{
    var savoirInutile = new SavoirInutile();
    document.getElementById("libelleSavoir").value=savoirInutile.auteur;
    document.getElementById("auteur").value=savoirInutile.savoir;
    document.getElementById("date").valueAsDate=savoirInutile.dateDecouverte;
    document.getElementById("libelleSavoir").focus();
}

function ajouter() {
    var savoirInutile = new SavoirInutile(document.getElementById("libelleSavoir").value,
                                        document.getElementById("auteur").value,
                                        document.getElementById("date").valueAsDate);

    if (savoirInutile.toutEstSaisie()) {
        var liSavoir = document.createElement("li");
        var pSavoir = document.createElement("p");
        var pInfos = document.createElement("p");


        pSavoir.innerText = savoirInutile.savoir;
        pInfos.innerText = savoirInutile.informations();
        pSavoir.className = "savoir";
        pInfos.className = "infos";
        liSavoir.addEventListener("click", supprimer);

        var olSavoir = document.getElementById("olListeSavoir");
        olSavoir.appendChild(liSavoir);
        liSavoir.appendChild(pSavoir);
        liSavoir.appendChild(pInfos);

        initialiserFormulaire();
    }
    else {
        alert("Tous les champs sont obligatoires");
    }
}

function supprimer(event)
{
    var savoir = event.currentTarget.getElementsByTagName("p")[0].innerText
    if(confirm(`Voulez-vous supprimer le savoir "${savoir}"?`))
    {
        event.currentTarget.parentNode.removeChild(event.currentTarget);
    }
}