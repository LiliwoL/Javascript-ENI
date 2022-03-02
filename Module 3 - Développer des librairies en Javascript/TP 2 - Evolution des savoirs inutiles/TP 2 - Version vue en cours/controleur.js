/////////////////////////////////////////////////////////////////////////////
//PARTIE CONTROLEUR//////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

class Controller {
    // Dans cette partie, on dispose de fonctions appelées suite aux actions de l'utilisateur

    // Fonction appelée au clic du bouton
    ajouter() {
        // Lecture des données du formulaire
        let libelleSavoir = document.getElementById("libelleSavoir").value;

        // ET instanciation d'un nouveau SavoirInutile
        var savoirInutile = new SavoirInutile(libelleSavoir,
            document.getElementById("auteur").value,
            document.getElementById("date").valueAsDate);

        // Vérification des données
        if (savoirInutile.toutEstSaisi()) {
            // Ajout du savoir dans le tableau
            ajouterSavoir(savoirInutile);

            // Appel de la méthode d'ajout dans le dom
            savoirInutile.ajouterDansLeDom();
        } else {
            alert("Tous les champs sont obligatoires");
        }
    }

    // Fonction appelée au CLIC d'un élément LI
    // Ici on utilise event comme paramètre pour récupérer la cible de l'événement
    supprimer(event) {
        console.log(event.currentTarget);

        let savoir = event.currentTarget;
        var savoirText = event.currentTarget.getElementsByTagName("p")[0].innerText
        if (confirm(`Voulez-vous supprimer le savoir "${savoirText}"?`)) {

            // Suppression dans le tableau
            supprimerSavoir(savoir.id);

            event.currentTarget.parentNode.removeChild(event.currentTarget);
        }
    }

    // Vidage de la liste
    effacerSavoirs() {
        var olSavoir = document.getElementById("olListeSavoir");
        olSavoir.innerHTML = "";
    }

    // Parcours du tableau des savoirs
    afficherSavoirs() {
        this.effacerSavoirs();

        // Notez la syntaxe du forEach
        savoirsInutiles.forEach((value, index, array) => {
                value.ajouterDansLeDom();
            }
        )
    }

    trier(type) {
        trierSavoirs(type);
        this.afficherSavoirs();
    }
}