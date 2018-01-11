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

“clef” : “valeur”

Exemple :

```json
var shop = {
	"fruits": [
		{	"pommes": 5,
			"cerises": 15,
			"myrtilles": 2
		},
		{
			"chariot": true
		}
	]
}

```

Nous pouvons afficher l’entier de la variable shop avec un console.log(shop);
Nous pouvons aussi récupérer des valeures du tableau avec un code JavaScript tel que :

```javascript
shop.fruits[0].pommes; 
```
Cela nous retournera 5.

Il est important de savoir que les valeures JSON doivent être utilisé avec des double quotes ‘’...’’

### Traitement des données

#### Echanger des données

Lors de l’échange de données entre un navigateur web et un serveur, les données peuvent seulement être du texte. Le JSON est du texte qui peut ensuite être converti en objet JavaScript. Il est aussi possible de de convertir un object JavaScript en JSON.

#### Envoyer des données

Si des données sont stocker dans un object JavaScript, il est possible de le convertir en JSON et de l’envoyer au serveur.
Exemple:

```json
var myObj = { "name":"John", "age":31, "city":"New York" };
var myJSON = JSON.stringify(myObj);
window.location = "demo_json.php?x=" + myJSON; 
```

#### Recevoir des données

Si les données reçu sont en JSON, il est possible de les convertir en un objet JavaScript.
Exemple:

```json
var myJSON = '{ "name":"John", "age":31, "city":"New York" }';
var myObj = JSON.parse(myJSON);
document.getElementById("demo").innerHTML = myObj.name; 
```

## JSON est comme le XML car

XML et JSON sont similaire car ils sont auto-descriptif (compréhensible par un humain) 
```xml
<person> 
  <age>12</age> 
  <name>Danielle</name> 
</person>
```
```json
myJSON = {"age" : 12, "name" : "Danielle"}
```

XML et JSON sont similaire car ils sont hiérarchique (Valeures dans les valeures)
XML et JSON sont similaire car ils peuvent être utilisé par un grand nombre de programme
XML et JSON sont similaire car ils peuvent être récupéré avec une XMLHttpRequest

Le JSON est plus simple et plus rapide à lire que le XML. Il est possible d’utiliser des tableaux dans le JSON. Le JSON est aussi plus court et n’utilise pas de balise. La différence la plus importante entre le JSON et le XML est que le XML doit utiliser un ‘’parseur’’ XML pour pouvoir être utilisé tandis que le JSON peut être utilisé par une fonction de base de JavaScript.

## JSON est différent du XML car

Le JSON est plus simple et plus rapide à lire que le XML. Il est possible d’utiliser des tableaux dans le JSON. Le JSON est aussi plus court et n’utilise pas de balise. La différence la plus importante entre le JSON et le XML est que le XML doit utiliser un ‘’parseur’’ XML pour pouvoir être utilisé tandis que le JSON peut être utilisé par une fonction de base de JavaScript.

## Pourquoi JSON est meilleur que le XML

Le XML est plus difficile a utiliser que le JSON. Le JSON est directement utilisable dans un objet JavaScript.
Pour l’utilisation d’AJAX, JSON est plus rapide et plus simple à utiliser.
Avec XML:
- Récupérer le document XML
- Utiliser le DOM XML pour faire une boucle dans le document
- Extraire les valeurs et les stocker dans des variables
Avec JSON:
- Récupérer la chaine JSON
- ‘’Parser’’ la chaine JSON

## Gloassaire 

| Mot   | Définition                        			|
|-------|-------------------------------------------------------|
| JSON  | **J**ava**S**cript **O**bject **N**otation     	|
| XML   | E**X**tensible **M**arkup **L**anguage        	|
| AJAX  | **A**synchronous **J**avaScript **A**nd **X**ML	|
| DOM   | **D**ocument **O**bject **M**odel             	|
