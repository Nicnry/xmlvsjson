function showObj()
{
    var json = '{"course":{"voiture":[{"marque":"Ford","modele":"GT40","pilotes":{"pilote":["Bastien","Nicolas"]}},{"marque":"Ferrari","modele":"250 GTO","pilotes":{"pilote":["Benjamin","Kevin"]}}]}}';
    var obj = convertJSONtoJavascript(json);
    var voiture1 = obj.course.voiture[0].marque + " " + obj.course.voiture[0].modele + " conduite par " + obj.course.voiture[0].pilotes.pilote[0] + " et " + obj.course.voiture[0].pilotes.pilote[1];
    var voiture2 = obj.course.voiture[1].marque + " " + obj.course.voiture[1].modele + " conduite par " + obj.course.voiture[1].pilotes.pilote[0] + " et " + obj.course.voiture[1].pilotes.pilote[1]
    document.getElementById('divObj').innerHTML = voiture1 + "</br>" + voiture2;
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