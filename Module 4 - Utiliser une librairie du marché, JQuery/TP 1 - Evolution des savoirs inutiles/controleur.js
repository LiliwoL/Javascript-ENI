jQuery(document).ready(
    function($)
    {
        demarrer();

        function demarrer() {
            initialiserDocument();
            $("#btAjouter").click(function () {
                ajouter();
            });
            $("#olListeSavoir").on("click","li",function (event) {
                supprimer(event);
            })
        }

        function initialiserDocument()
        {
            initialiserFormulaire();
            afficherSavoirs();
        }

        function initialiserFormulaire()
        {
            var savoirInutile = service.getSavoirDefaut();
            $("#libelleSavoir").val(savoirInutile.auteur);
            $("#auteur").val(savoirInutile.savoir);
            $("#date")[0].valueAsDate=(savoirInutile.dateDecouverte);
            $("#libelleSavoir").focus();
        }

        function effacerSavoirs()
        {
            $("#olListeSavoir").empty();
        }

        function afficherSavoirs()
        {

            var olSavoir = $("#olListeSavoir");

            service.getSavoirsInutiles()
                .then(function (savoirsInutiles) {
                        effacerSavoirs();
                        savoirsInutiles.forEach((value, index, array)=>
                            {
                                var liSavoir = $("<li/>");
                                var pSavoir = $("<p/>");
                                var pInfos = $("<p/>");
                                pSavoir.addClass("savoir");
                                pInfos.addClass("infos");

                                liSavoir.attr("id",index);
                                pSavoir.text(value.savoir);
                                pInfos.text(value.informations());

                                olSavoir.append(liSavoir);
                                liSavoir.append(pSavoir);
                                liSavoir.append(pInfos);
                            });
                        }
                )
                .catch(function () {
                    alert("Erreur à la récupération des savoirs.");
                });
        }

        function ajouter(){
            service.ajouterSavoir($("#libelleSavoir").val(),
                $("#auteur").val(),
                $("#date")[0].valueAsDate)
                .then(function () {
                    initialiserDocument();
                })
                .catch(function () {
                    alert("Tous les champs sont obligatoires");
                });
            initialiserFormulaire();
        }

        function supprimer(event)
        {
            var index = event.currentTarget.id;
            console.log(`index: ${index}`);
            service.getSavoirsInutiles().then(function (savoirInutiles) {
                if(confirm(`Voulez-vous supprimer le savoir "${savoirInutiles[index].savoir}"?`))
                {
                    service.supprimerSavoir(savoirInutiles[index].uuid)
                        .then(function () {
                            initialiserDocument()
                        })
                        .catch(function () {
                            alert("Echec de la suppression du savoir");
                        });
                }
            })

        }
    }
);