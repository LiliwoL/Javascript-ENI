class ServiceLocalStorage{
    constructor (){
        this.cleSavoirsInutiles = "savoirsInutiles";
    }

    // Méthode pour ajouter une valeur à la clé dans le localStorage
    ajouter(value){
        localStorage.setItem(this.cleSavoirsInutiles,JSON.stringify(value));
    }

    supprimer(value)
    {
        localStorage.setItem(this.cleSavoirsInutiles, "");
        this.ajouter(value);
    }
}