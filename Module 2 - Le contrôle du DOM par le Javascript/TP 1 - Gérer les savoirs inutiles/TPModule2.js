//TP : le savoir inutile
//http://www.topito.com/top-infos-insolites-corps-humain
/*
* Créer une application single-page permettant d'ajouter des savoirs inutiles (avec le nom de l'auteur et la date de saisie).
* Ceux-ci s'affichent dans une liste sur la même page.
* Un bouton supprimer à côté de chaque savoir permet de le supprimer.
*/
function chargementTermine()
{
    document.getElementById("date").valueAsDate=new Date();
    document.getElementById("libelleSavoir").focus();
}

function toutEstSaisie(savoir, auteur, dateSaisie) {
    return savoir!="" && auteur!="" && dateSaisie!="";
}

function ajouter()
{
    var savoir = document.getElementById("libelleSavoir").value;
    var auteur = document.getElementById("auteur").value;
    var dateSaisie = document.getElementById("date").valueAsDate;

    if(toutEstSaisie(savoir, auteur, dateSaisie)) {
        var jour = dateSaisie.getDate().toString().padStart(2, "0");
        var mois = (dateSaisie.getMonth() + 1).toString().padStart(2, "0");
        var annee = dateSaisie.getFullYear();

        var liSavoir = document.createElement("li");
        var pSavoir = document.createElement("p");
        var pInfos = document.createElement("p");


        pSavoir.innerText = savoir;
        pInfos.innerText = `Par ${auteur}, le ${jour}/${mois}/${annee}`;
        pSavoir.className = "savoir";
        pInfos.className = "infos";
        liSavoir.addEventListener("click", supprimer);

        var olSavoir = document.getElementById("olListeSavoir");
        olSavoir.appendChild(liSavoir);
        liSavoir.appendChild(pSavoir);
        liSavoir.appendChild(pInfos);

        document.getElementById("libelleSavoir").value = "";
        document.getElementById("auteur").value = "";
        document.getElementById("date").valueAsDate = new Date();
    }
    else {
        alert("Tous les champs sont obligatoires");
    }
    document.getElementById("libelleSavoir").focus();
}

function supprimer(event)
{
    var savoir = event.currentTarget.getElementsByTagName("p")[0].innerText
    if(confirm(`Voulez-vous supprimer le savoir "${savoir}"?`))
    {
        event.currentTarget.parentNode.removeChild(event.currentTarget);
    }
}