$(document).ready(
    function () {
        var URL;
        initialiser();

        function initialiser()
        {
            URL ="http://localhost:8080";
            $("#monFormulaire").submit(function(event){
                ajouterMarin();
                event.preventDefault();
            });
            afficherMarins();
            $("#nouveauMarin").focus();
        }

        function ajouterMarin()
        {
            var dataAEnvoyer = $("#nouveauMarin").val();
            //nomZoneSaisie=valeur&nomZoneSaisie2=valeur2....
            //var datasAEnvoyer = $("#monFormulaire").serialize();
            $("#nouveauMarin").val("");
            $("#nouveauMarin").focus();
            $.ajax(
                {
                    url: URL,
                    method: "POST",
                    data: dataAEnvoyer
                })
                .done(function () {
                    console.log("Ajout du marin réussi");
                    afficherMarins();
                })
                .fail(function (xhr, status, errorThrown) {
                    erreurAJAX(xhr, status, errorThrown);
                })
        }

        function afficherMarins()
        {
            $.ajax(
                {
                    url: URL,
                    method: "GET"
                })
                .done(function (marinsAAfficher) {
                    //console.log(marinsAAfficher);
                    var divListeMarins = $("#listeMarins");
                    divListeMarins.empty();
                    marinsAAfficher.forEach(
                        function(nomMarin){$("<div></div>").text(nomMarin).appendTo(divListeMarins);}
                    )
                })
                .fail(function (xhr, status, errorThrown) {
                    erreurAJAX(xhr, status, errorThrown);
                })
        }

        function erreurAJAX(xhr, status, errorThrown) {
            console.log("Une erreur est survenue : %s (%s)", errorThrown, status);
            console.log(xhr);
        }
    }
);

