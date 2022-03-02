//TP : le savoir inutile
//http://www.topito.com/top-infos-insolites-corps-humain
/*
* 1- Faire évoluer l'application en manipulant les concepts objets
* 2- Gérer un tableau de savoirs inutiles pour permettre de trier l'affichage
* par ordre alphabétique sur l'auteur et par ordre chronologique sur la date
*/
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
        var liSavoir = document.createElement("li");
        var pSavoir = document.createElement("p");
        var pInfos = document.createElement("p");


        pSavoir.innerText = this.savoir;
        pInfos.innerText = this.informations();
        pSavoir.className = "savoir";
        pInfos.className = "infos";
        liSavoir.addEventListener("click", supprimer);

        var olSavoir = document.getElementById("olListeSavoir");
        olSavoir.appendChild(liSavoir);
        liSavoir.appendChild(pSavoir);
        liSavoir.appendChild(pInfos);
    }
}

// Fonction appelée au clic du bouton
function ajouter() {
    // Lecture des données du formulaire ET instanciation d'un nouveau SavoirInutile
    var savoirInutile = new SavoirInutile(document.getElementById("libelleSavoir").value,
                                        document.getElementById("auteur").value,
                                        document.getElementById("date").valueAsDate);

    // Vérification des données
    if (savoirInutile.toutEstSaisi())
    {
        // Appel de la méthode d'ajout dans le dom
        savoirInutile.ajouterDansLeDom();
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