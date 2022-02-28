/////////////////////////////////////////////////////////////////////////////////////
//DEMO 3                                                                           //
//Utilisation des événements                                                       //
//COURS : https://learn.jquery.com/events/event-basics                             //
//API : http://api.jquery.com/category/events/                                     //
/////////////////////////////////////////////////////////////////////////////////////
jQuery(document).ready(
  function ($) {
      console.log("Point d'entrée de mes fonctionnalités");
  }
);

jQuery(
    function ($) {
        abonnement();

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
    }
)






















