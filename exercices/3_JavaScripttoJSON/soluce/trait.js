function showJSON()
{
    var obj = {"employees":[{"firstName":"John", "lastName":"Doe"},{"firstName":"Anna", "lastName":"Smith"},{"firstName":"Peter", "lastName":"Jones"}]};
    var json = convertJavascripttoJSON(obj);
    document.getElementById('divJSON').innerHTML = json;
}

function convertJavascripttoJSON(obj)
{
    var json = null;
    // Ajoutez la fonction permettant de convertir l'objet JavaScript en JSON
    json = JSON.stringify(obj)
    return json;
}