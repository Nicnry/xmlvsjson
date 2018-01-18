function showObj()
{
    var json = '{"course":{"voiture":[{"marque":"Ford","modele":"GT40","pilotes":{"pilote":["Bastien","Nicolas"]}},{"marque":"Ferrari","modele":"250 GTO","pilotes":{"pilote":["Benjamin","Kevin"]}}]}}';
    var obj = convertJSONtoJavascript(json);
    document.getElementById('divObj').innerHTML = obj.course.voiture[0].marque;
}

function convertJSONtoJavascript(jsonString)
{
    var obj = null;
    obj = JSON.parse(jsonString);
    return obj;
}

function showJSON()
{
    var obj = {"course":{"voiture":[{"marque":"Ford","modele":"GT40","pilotes":{"pilote":["Bastien","Nicolas"]}},{"marque":"Ferrari","modele":"250 GTO","pilotes":{"pilote":["Benjamin","Kevin"]}}]}};
    var json = convertJavascripttoJSON(obj);
    document.getElementById('divJSON').innerHTML = json;
}

function convertJavascripttoJSON(obj)
{
    var json = null;
    json = JSON.stringify(obj)
    return json;
}