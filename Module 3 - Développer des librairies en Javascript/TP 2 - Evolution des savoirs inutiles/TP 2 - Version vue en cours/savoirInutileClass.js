/////////////////////////////////////////////////////////////////////////////
//PARTIE METIER//////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

// Dans cette partie, on définit la classe SavoirInutile
class SavoirInutile{

    // On pourrait vérifier les données au moment de la construction, ce n'est pas le cas ici, on utilise des valeurs par défaut
    constructor(savoir, auteur, dateDecouverte) {
        this.id = Date.now();
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
        liSavoir.addEventListener("click", controleur.supprimer);

        // Ajout du id
        liSavoir.id = this.id;

        // Ajout REEL dans le DOM
        var olSavoir = document.getElementById("olListeSavoir");
        olSavoir.appendChild(liSavoir);
        liSavoir.appendChild(pSavoir);
        liSavoir.appendChild(pInfos);
    }
}
