/*
    3 constructeurs : Ligne(), Rectangle() et Parallelepipede()

    On veut que Rectangle() hérite de Ligne()
    et que Parallelepipede() hérite de Rectangle()
    (et donc par extension de Ligne().
 */


// Notre premier constructeur Ligne() possède une propriété longueur
// Ce constructeur prend en argument la valeur relative à la propriété longueur d’un objet en particulier
//      lorsqu’on crée un objet à partir de celui-ci.
function Ligne(longueur){
    this.longueur = longueur;
}
// On ajoute ensuite une première méthode dans le prototype de notre constructeur.
//     Cette méthode appartient au constructeur et sera partagée par tous les objets
//     créés à partir de celui-ci.
Ligne.prototype.taille = function(){
    document.getElementById('p1').innerHTML = 'Longueur : ' + this.longueur};

// On crée ensuite un deuxième constructeur Rectangle().
//     Dans ce constructeur, vous pouvez remarquer la ligne Ligne.call(this, longueur);.
function Rectangle(longueur, largeur){
    // Pour information, la méthode call() permet d’appeler une fonction rattachée à un
    //     objet donné sur un autre objet.
    //     La méthode call() est une méthode prédéfinie qui appartient au prototype de l’objet natif Function.
    //
    //     On l’utilise ici pour faire appel au constructeur Ligne()
    //      dans notre constructeur Rectangle().
    //     Le mot clef this permet de faire référence à l’objet courant et
    //     de passer la valeur de l’objet relative à sa propriété longueur.
    Ligne.call(this, longueur);
    this.largeur = largeur;
}
// Ensuite, on va créer un objet en utilisant le prototype
//     de Ligne grâce à la méthode create() qui est une méthode
//     de l’objet Object() et on va assigner cet objet au prototype de Rectangle.
Rectangle.prototype = Object.create(Ligne.prototype);
//  Le prototype de Rectangle possède donc en valeur
//     un objet créé à partir du prototype de Ligne.
//     Cela permet à Rectangle d’hériter des propriétés et méthodes définies dans le prototype de Ligne.

//   Il nous reste cependant une chose à régler ici :
//     il va nous falloir rétablir la valeur de la propriété constructor
//      de prototype de Rectangle car la ligne précédente a eu
//     pour effet de définir Rectangle.prototype.constructor comme étant égal à celui de Ligne().
Rectangle.prototype.constructor = Rectangle;

// On ajoute finalement une méthode aire() au prototype de Rectangle.
Rectangle.prototype.aire = function(){
    document.getElementById('p2').innerHTML =
        'Aire : ' + this.longueur * this.largeur};


// On répète l’opération en création un deuxième niveau d’héritage
//     avec le constructeur Parallélépipède() qui va hériter de Rectangle().
function Parallelepipede(longueur, largeur, hauteur){
    Rectangle.call(this, longueur, largeur);
    this.hauteur = hauteur;
}
Parallelepipede.prototype = Object.create(Rectangle.prototype);
Parallelepipede.prototype.constructor = Parallelepipede;
Parallelepipede.prototype.volume = function(){
    document.getElementById('p3').innerHTML =
        'Volume : ' + this.longueur * this.largeur * this.hauteur};


//  Enfin, on crée un objet geo à partir du
//      constructeur Parallélépipède().
//
//      Cet objet va pouvoir utiliser les méthodes définies dans
//      les prototypes de Parallélépipède(), de Rectangle() et de Ligne() !
let geo = new Parallelepipede(5, 4, 3);
geo.volume();
geo.aire();
geo.taille();

