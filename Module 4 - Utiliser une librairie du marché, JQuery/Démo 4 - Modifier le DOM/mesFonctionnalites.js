/////////////////////////////////////////////////////////////////////////////////////
//DEMO 4                                                                           //
//Utilisation des événements                                                       //
//COURS : https://learn.jquery.com/events/event-basics                             //
//API : http://api.jquery.com/category/events/                                     //
/////////////////////////////////////////////////////////////////////////////////////
jQuery(document).ready(
  function ($) {
      abonnement();

      function abonnement()
      {
          $("#btRemplacerMarin").on("click",function () {
              remplacerMarin();
          })
      }

      function remplacerMarin()
      {
          //Supprimer le marin M1
          //$(".marin:first").remove();
          $(".marin").each(function () {
              if($(this).text()==="M1")this.remove();
          })

          //Créer le nouveau marin
          //var nouveauMarin = $("<div class=\"marin\">M6</div>");
          var nouveauMarin = $("<div></div>");
          nouveauMarin.text("M6");
          nouveauMarin.addClass("marin");
          nouveauMarin.css("background-color", "green");

          //Ajouter le marin M6
          //$(".equipage").append(nouveauMarin);
          nouveauMarin.prependTo($(".equipage"));
      }
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






















