function validerSaisie()
{
    console.log("clic sur le bouton btn1");
    console.log("La valeur saisie est %s", document.getElementById("saisie").value);
    document.getElementById("btn2").addEventListener("click",clicBouton2);
}

function clicBouton2(event)
{
    console.log("Clic sur le bouton 2 " + event);
}

function ajouterLien()
{
    var lien = document.createElement("a");
    var nomLien = document.createTextNode("ENI");
    lien.setAttribute("href","https://www.eni-ecole.fr");
    lien.setAttribute("target", "_blank");
    lien.appendChild(nomLien);
    document.getElementById("btn3").insertAdjacentElement("afterend",lien);
}

function colorerLesBoutons()
{
    var boutons = document.querySelectorAll("input[type='button']");
    for(let i=0;i<boutons.length;i++)
    {
        boutons[i].className="couleur";
        console.log(boutons[i]);
    }
}









