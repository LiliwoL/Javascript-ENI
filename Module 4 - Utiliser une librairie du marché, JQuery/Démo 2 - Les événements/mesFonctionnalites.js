/////////////////////////////////////////////////////////////////////////////////////
//DEMO 2                                                                           //
//Utilisation des événements                                                       //
//COURS : https://learn.jquery.com/events/event-basics                             //
//API : http://api.jquery.com/category/events/                                     //
/////////////////////////////////////////////////////////////////////////////////////
/*function abonnement() {
    $("#btToutLeMondeSeCache").click(function () {
        toutLeMondeSeCache();
    });
    $("#btToutLeMondeReapparait").on("click", function () {
        toutLeMondeReapparait();
    })
    $("#btLeCapitaineSeCache").bind("click", function () {
        leCapitaineSeCache();
    })
    $("#btLesMarinsSeCachent").click(function () {
        lesMarinsSeCachent();
    })
    $("#btLesBateauxSeCachent").click(function () {
        lesBateauxSeCachent();
    })
}

function toutLeMondeSeCache()
{
    $("div").hide();
}

function toutLeMondeReapparait()
{
    jQuery("div").show();
}

function leCapitaineSeCache()
{
    $("#capitaine").hide();
}

function lesMarinsSeCachent()
{
    $(".marin").hide();
}

function lesBateauxSeCachent()
{
    $("div > div[class='bateau']").hide();
}*/

//DEUXIEME EXEMPLE
function abonnement() {
    $("#btToutLeMondeSeCache").click(function () {
        cacher("div");
    });
    $("#btToutLeMondeReapparait").on("click", function () {
        afficher("div");
    })
    $("#btLeCapitaineSeCache").bind("click", function () {
        cacher("#capitaine");
    })
    $("#btLesMarinsSeCachent").click(function () {
        cacher(".marin");
    })
    $("#btLesBateauxSeCachent").click(function () {
        cacher("div > div[class='bateau']");
    })

    //chainage des événements
    /*$(".marin").click(function () {
        console.log("clic sur un marin");
    });
    $(".equipage").click(function () {
        console.log("clic sur l'équipage");
    });
    $("body").click(function () {
        console.log(("clic sur le body"));
    })*/
    //Délégation des événements sur un élément parent
    $(".equipage").on("click",".marin", function (event) {
        console.log("J'ai cliqué sur un marin.");
    })

    $("#lienENIEcole").on("click",{info:"coucou"},function (event) {
        alert("Clic sur le lien mais annulation du comportement par défaut");
        console.log("Data disponibles : " + event.data.info);
        console.log("Type : " + event.type);
        console.log("Target : " + event.currentTarget);
        event.preventDefault();
    })
}

function cacher(selecteur)
{
    $(selecteur).hide();
}
function afficher(selecteur) {
    $(selecteur).show();
}