//Créer un objet
var sport = {nom:"squash", description:"un jeu de raquettes"};

//Manipuler un objet
console.log(sport);
console.log(sport.nom);
sport.nom="Squash";
console.log(sport["nom"]);

//Un objet est une structure dynamique
sport.nombreJoueurs = 2;
console.log(sport);

//Un objet peut contenir des fonctions
var sport2 = {
                nom:"Badminton",
                description:"ça vole",
                afficher:function()
                        {
                            console.log(`${this.nom.toUpperCase()} ${this.description}`)
                        }
             }

sport2.afficher();

//Il est possiblie de créer des tableaux d'objets
var sports = [sport, sport2, {nom:"PADEL", description:"un autre jeu de raquettes"}];
sports.push({nom:"TENNIS", description:"ça claque"});
console.log(sports);

//Un objet peut référencer un tableau
sport.qualificatifs=["Rapide", "Fatigant", "..."];
console.log(sport);











