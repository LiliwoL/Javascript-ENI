var service = (
    function(bo,$)
    {
        var URL="http://localhost:1234";
        savoirsInutiles=[];
        var service={};

        service.ajouterSavoir = function(savoir,auteur,dateDecouverte)
        {
            var savoirAAjouter = new bo.SavoirInutile(savoir,auteur,dateDecouverte);
            return new Promise(function (resolve,reject) {
                if(savoirAAjouter.toutEstSaisie()) {
                    $.ajax({
                        url:URL,
                        data:JSON.stringify(savoirAAjouter),
                        type:"POST"
                    }).then(function () {
                        resolve();
                    }).fail(function () {
                        reject();
                    });
                }
                else {
                    reject();
                }
            });
        }

        service.supprimerSavoir = function(uuid)
        {
            return new Promise(function (resolve,reject) {
                $.ajax({
                    url:URL,
                    data:uuid,
                    type:"DELETE"
                }).then(function () {
                    resolve();
                }).fail(function () {
                    reject();
                })
            });
        }


        service.getSavoirsInutiles = function()
        {
            return new Promise(function (resolve,reject) {
                $.ajax({
                    url:URL,
                    type:"GET"
                })
                    .done(function (data){
                        savoirsInutiles = data||[];
                        savoirsInutiles.forEach(value => {Object.setPrototypeOf(value,bo.SavoirInutile.prototype);
                            value.dateDecouverte=new Date(value.dateDecouverte)});
                        savoirsInutiles.forEach(value => {console.log(value)});
                        resolve(savoirsInutiles);
                    })
                    .fail(function () {
                        reject();
                    })
            });

        }

        service.getSavoirDefaut = function()
        {
            return new bo.SavoirInutile("","",new Date());
        }

        return service;
    }
)(bo,jQuery);