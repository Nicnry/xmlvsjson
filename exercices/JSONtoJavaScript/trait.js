function showName()
{
    var json = '{"employees":[{"firstName":"John", "lastName":"Doe"},{"firstName":"Anna", "lastName":"Smith"},{"firstName":"Peter", "lastName":"Jones"}]}';
    var obj = convertJSONtoJavascript(json);
    document.getElementById('divName').innerHTML = obj.employees[0].lastName;
}

function convertJSONtoJavascript(jsonString)
{
    var obj = null;
    // Ajoutez la fonction permettant de convertir le JSON en objet JavaScript
    
    return obj;
}