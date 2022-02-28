var dateDebut;
var dateIntermediaire;
var nombreCaracteresIntermediaire;
var zoneDeControle;
var zoneVitesseGenerale;
var zoneVitesseIntermediaire;

function demarrer()
{
    zoneDeControle = document.getElementById("zoneDeControle");
    zoneVitesseGenerale = document.getElementById("vitesseGenerale");
    zoneVitesseIntermediaire = document.getElementById("vitesseIntermediaire");
    zoneDeControle.addEventListener("focus",lancerRadar);
}

function lancerRadar() {
    dateDebut = Date.now();
    dateIntermediaire = dateDebut;
    nombreCaracteresIntermediaire=0;
    flasher(5);
}

function flasher(frequence){
    setTimeout(mettreAJourCompteur, frequence*1000);
}

function mettreAJourCompteur()
{
    var maintenant = Date.now();
    var nombreCaracteresSaisis = zoneDeControle.value.length;

    var dureeGlobale = maintenant - dateDebut;
    var dureeDernierIntermediaire = maintenant - dateIntermediaire;
    var nombreCaracteresSurDernierIntermediaire = nombreCaracteresSaisis - nombreCaracteresIntermediaire;

    var vitesseGenerale = parseInt(nombreCaracteresSaisis/(dureeGlobale/1000)*60);
    var vitesseIntermediaire = parseInt(nombreCaracteresSurDernierIntermediaire/(dureeDernierIntermediaire/1000)*60);

    afficherVitesse(zoneVitesseGenerale,vitesseGenerale);
    afficherVitesse(zoneVitesseIntermediaire,vitesseIntermediaire);

    nombreCaracteresIntermediaire = nombreCaracteresSaisis;
    dateIntermediaire=maintenant;

    flasher(5);
}

function afficherVitesse(zoneVitesse,vitesse)
{
    zoneVitesse.innerText = vitesse;
    if(vitesse<60)
    {
        zoneVitesse.className="lent";
    }
    else if(vitesse<120)
    {
        zoneVitesse.className="intermediaire";
    }
    else
    {
        zoneVitesse.className="rapide";
    }
}

