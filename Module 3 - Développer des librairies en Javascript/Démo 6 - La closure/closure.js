var librairie = (
    function(){
        var librairie={};

        librairie.enregistrer = function(cible){
            if(cible.toLowerCase()==="memoire")
            {
                return function(data){console.log("J'enregistre les datas '%s' en mémoire",data)};
            }
            else if(cible.toLowerCase()==="stockagelocal")
            {
                return function(data){console.log("J'enregistre les datas '%s' en local",data)};
            }
            else if(cible.toLowerCase()==="rest")
            {
                return function(data){console.log("J'enregistre les datas '%s' avec l'API REST",data)};
            }
        }

        return librairie;
    }
)();

var  enregistrerData = librairie.enregistrer("memoire");
enregistrerData("Bonjour tout le monde");