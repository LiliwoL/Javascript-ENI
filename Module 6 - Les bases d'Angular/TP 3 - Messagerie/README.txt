Points de difficult�:
- La navigation filtr�e entre les diff�rents pseudo. Comme c'est la m�me URL, il n'y a pas mise � jour de l'�cran. Il y a une subtilit� � rajouter dans le constructeur du composant "Messagerie" dans ma correction.
-Dans le service MessagesService, conservez le m�canisme des EventEmitter pour la mise � jour automatique des composants ListeMessages et ListePersonnes. 
-Lorsque vous r�cup�rez les messages depuis le serveur, il faut parser la date car elle est rest�e au format texte. Vous avez le code n�cessaire disponible dans le service MessagesService.
-Le code de la m�thode obtenirMessages du service MessagesService est finalement assez complexe. Il faudra peut-�tre r�fl�chir � pr�senter les async-await pour simplifier tout �a. 