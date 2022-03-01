// Création d'une classe Eleve
let eleve = function (nom, prenom){
    // Attributs
    this.nom = nom || "pas de nom";
    this.prenom = prenom || "pas de prénom";

    // Methode d'affichage
    this.afficher = function(){
        console.log('${this.prenom} ${this.prenom}');
    }
}

// Instances
let nicolas = new eleve(null, "Nicolas");
nicolas.afficher();