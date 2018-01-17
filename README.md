# xml vs json
<div align="center">
<img src="/img/json.png"></img>
</br>
<img src="/img/vs.png"></img>
</br>
<img src="/img/xml.png"></img>
</div>

## Table des matières
- XML
- JSON
- JSON est comme le XML car
- JSON est différent du XML car
- Pourquoi JSON est meilleur que le XML
- Glossaire

## XML

XML (e**X**tensible **M**arkup **L**anguage) est un langage qui permet de décrire des données à l’aide de balises et de règles que l’on peut personnaliser.

### Utilisation

Voici un exemple ci-dessous en JSON (140 caractères) 

	{
	    "id": 123,
	    "title": "Object Thinking",
	    "author": "David West",
	    "published": {
	        "by": "Microsoft Press",
	        "year": 2004
	    }
	}


Voici maintenant le même exemple mais en XML (167 caractères) 

	<?xml version="1.0"?>
	<book id="123">
	    <title>Object Thinking</title>
	    <author>David West</author>
	    <published>
	        <by>Microsoft Press</by>
	        <year>2004</year>
	    </published>
	</book>


C’est assez facile à comparer, le premier exemple est un peu plus court et plus facile à comprendre, il est en plus analysable en JavaScript, alors à besoin d’un XML lourd, vieux de 20 ans ?  
La raison est que le XML est tout de même utile, c’est un langage très puissant, contrairement à JSON qui n’est qu’un bon format de donnée, utilisé pour transférer des données d’un point A à un point B, il est que plus court et plus lisible.


### Particularités

Il y a quelques spécificités que nous offre le XML comme :
 
#### XPATH
Afin de récupérer des données comme l’année de publication par exemple, l’avantage est que XPATH 2.0 est un moteur de requête très puissant avec ses propres fonctions, n’importe quelle logique y est acceptée. L’on peut demander combien de livre ont été publié par David West en 2004 et obtenir une réponse. JSON n’est pas proche de ça.
 
#### Attributs et espace de noms
Il est possible de joindre des métadonnées à vos données, comme c’est le cas avec l’id ci-dessus. Les données restent à l’intérieur des balises (comme le nom de l’auteur par exemple) alors que les métadonnées (données sur les données) doivent être placé dans des balises, ce qui aide dans l’organisation et la structuration des informations. Au-dessus ce cela l’on peut définir un espace de nom (indispensable si plusieurs applications travaillent avec le même document XML)
 
#### Schémas XML
Après la création d’un XML, que l’on modifie plusieurs fois, que l’on déplace à un endroit. Après toutes les modifications l’on veut s’assurer que la structure n’est pas corrompue. Pour éviter tout désordre dans la structure l’on peut rajouter un schéma que l’on envoie avec le document principal. Tout le monde qui veut travailler avec le document principal va d’abord valider son exactitude en utilisant le schéma.
 
#### XSL
L’on peut apporter des modifications au fichier XML sans utiliser de code (Java, Ruby etc.), il suffit de créer un document de transformation XSL et de l’appliquer à votre XML. En sortie, on obtient un nouveau fichier XML. Le XSL est conçu pour des manipulations de données hiérarchiques. Il est beaucoup plus adapté à cette tâche que Java ou toute autre approche POO. Il est possible de transformer un document XML en n’importe quoi, y compris en texte brut ou en HTML
 
Ce n’est pas une liste complète mais ces quatre caractéristiques permettent à un document d’être ‘’autosuffisant’’. Il peut se valider de lui-même (Schémas XML), il se modifie lui-même (XSL) et donne un accès pratique à ce qui s’y trouve (XPATH)
 
JSON n'a pas été conçu pour avoir de telles fonctionnalités, même si l’on peut trouver certains outils pour les transformations, JSONPath pour l'interrogation et json-schema pour la validation, mais ce ne sont que des parodies faibles comparées à ce que XML offre.


## JSON

JSON (**J**ava**S**cript **O**bject **N**otation) est une syntaxe utilisant la notation d’objet JavaScript pour stocker et échanger des données.

### Utilisations

Le JSON permet de fournir un ‘’support texte’’ pour avoir une écriture simple, légère et compréhensible par les personnes qui le lisent. Contrairement au XML, il est interprété nativement. Cependant, le JSON s’est inspiré de ce langage. 
Quelques façons d’utiliser JSON se retrouve dans JQuery avec des fonctions AJAX tel que $.ajax().
Le principe est d’utiliser la syntaxe JavaScript pour utiliser des “Object”, “Number”, “String” ou  “Array”. Il en découle une utilisation clef:valeur permettant de structurer les valeurs.
La syntaxe JSON est un sous-ensemble de la syntaxe JavaScript.
Les règles à suivre pour respecter la syntaxe JSON sont les suivantes:
- Les données sont dans des paires nom / valeur
- Les données sont séparées par des virgules
- Le accolades {...} contiennent les objets
- Les crochets [...] contiennent les tableaux

```
“clef” : “valeur”
```

Voici un exemple de JSON :

	var shop = { 
		"fruits": [
	        {    "pommes": 5,
	            "cerises": 15,
	            "myrtilles": 2
	        },
	        {
	            "chariot": true
	        }
    	]
	}


Nous pouvons afficher l’entier de la variable shop avec un console.log(shop);
Nous pouvons aussi récupérer des valeurs du tableau avec un code **JavaScript** tel que :


```
shop.fruits[0].pommes; 
```

Cela nous retournera 5.

*Il est important de savoir que les valeurs JSON doivent être utilisé avec des double quottes ‘’...’’*

### Traitement des données

#### Echanger des données

Lors de l’échange de données entre un navigateur web et un serveur, seulement du texte transite (le JSON). Il peut ensuite être converti en objet JavaScript et inversement (objet JavaScript en JSON).

#### Envoyer des données

Si des données sont stocker dans un objet JavaScript, il est possible de le convertir en JSON et de l’envoyer au serveur.
Exemple:


	var myObj = { "name":"John", "age":31, "city":"New York" };
	var myJSON = JSON.stringify(myObj);
	window.location = "demo_json.php?x=" + myJSON; 

#### Recevoir des données

Si les données reçu sont en JSON, il est possible de les convertir en un objet JavaScript.
Exemple:


	var myJSON = '{ "name":"John", "age":31, "city":"New York" }';
	var myObj = JSON.parse(myJSON);
	document.getElementById("demo").innerHTML = myObj.name; 


## JSON est comme le XML car 

XML et JSON sont similaire car ils sont auto-descriptif (compréhensible par un humain) 

XML

	<person> 
	  <age>12</age> 
	  <name>Danielle</name> 
	</person>

JSON

	myJSON = { "age" : 12, "name" : "Danielle"}


Similarité entre XML et JSON : 

- Ils sont hiérarchique (Valeurs dans les valeurs)
- Ils peuvent être utilisé par un grand nombre de programme
- Ils peuvent être récupéré avec une XMLHttpRequest

## JSON est différent du XML car

Le JSON est plus simple et plus rapide à lire que le XML. Il est possible d’utiliser des tableaux dans le JSON. Le JSON est aussi plus court et n’utilise pas de balise. La différence la plus importante entre le JSON et le XML est que le XML doit utiliser un ‘’parseur’’ XML pour pouvoir être utilisé tandis que le JSON peut être utilisé par une fonction de base de JavaScript.

## Pourquoi JSON est "meilleur" que le XML

Le XML est plus lourd a utiliser que le JSON, il nécessite un parseur ainsi qu’un minimum de connaissance. Quant à lui, Le JSON est directement utilisable dans un objet JavaScript et il est plus léger.

Pour l’utilisation d’AJAX, JSON est plus rapide et plus simple à utiliser.

Avec XML:

- Récupérer le document XML
- Utiliser le DOM XML pour faire une boucle dans le document
- Extraire les valeurs et les stocker dans des variables

Avec JSON:

- Récupérer la chaine JSON
- ‘’Parser’’ la chaine JSON

## Glossaire 

| Mot   | Définition                                    |
|-------|-------------------------------------------------------|
| JSON  | **J**ava**S**cript **O**bject **N**otation         |
| XML   | E**X**tensible **M**arkup **L**anguage            |
| AJAX  | **A**synchronous **J**avaScript **A**nd **X**ML    |
| DOM   | **D**ocument **O**bject **M**odel                 |
