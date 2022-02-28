Points de difficulté:
- La navigation filtrée entre les différents pseudo. Comme c'est la même URL, il n'y a pas mise à jour de l'écran. Il y a une subtilité à rajouter dans le constructeur du composant "Messagerie" dans ma correction.
-Dans le service MessagesService, conservez le mécanisme des EventEmitter pour la mise à jour automatique des composants ListeMessages et ListePersonnes. 
-Lorsque vous récupérez les messages depuis le serveur, il faut parser la date car elle est restée au format texte. Vous avez le code nécessaire disponible dans le service MessagesService.
-Le code de la méthode obtenirMessages du service MessagesService est finalement assez complexe. Il faudra peut-être réfléchir à présenter les async-await pour simplifier tout ça. 