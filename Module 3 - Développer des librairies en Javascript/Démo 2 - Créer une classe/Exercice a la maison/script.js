// On va utiliser des données issues de Random User Api
// https://randomuser.me/api/?gender=male&nat=fr

let data = [{"gender":"male","name":{"title":"Mr","first":"Malone","last":"Lopez"},"location":{"street":{"number":3328,"name":"Rue de L'Abbé-Patureau"},"city":"Boulogne-Billancourt","state":"Eure","country":"France","postcode":66650,"coordinates":{"latitude":"21.5277","longitude":"35.3284"},"timezone":{"offset":"+4:00","description":"Abu Dhabi, Muscat, Baku, Tbilisi"}},"email":"malone.lopez@example.com","login":{"uuid":"995924ac-62e8-46e7-b6b9-5b45d9ffc10a","username":"happyostrich614","password":"chantal","salt":"Xzj6Hx6D","md5":"acea493f45146d7828a4dc71a788dc68","sha1":"47a012feb9e5df95ea4d768d6e8c05e71be9cd36","sha256":"85cebf427df4d742c37e7740a5908352720ab2de8b35ae244991019f697f072b"},"dob":{"date":"1963-03-06T15:16:01.648Z","age":59},"registered":{"date":"2014-10-10T13:47:16.004Z","age":8},"phone":"02-86-99-80-06","cell":"06-06-59-42-44","id":{"name":"INSEE","value":"1NNaN59426961 86"},"picture":{"large":"https://randomuser.me/api/portraits/men/25.jpg","medium":"https://randomuser.me/api/portraits/med/men/25.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/25.jpg"},"nat":"FR"}];

/*
    Exercice:

    Parcourir le tableau data
    Attention! Il y a des sous tableaux!!

    Afficher les résultats le plus joliment possible dans le html
 */