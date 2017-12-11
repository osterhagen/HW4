function sortID() {
    var json = JSON.parse(localStorage.getItem("entries"));
    var compare = {"info" : []};
    //alert(json.hours);
    var prenum = compare.hours;
    var num = json.hours.sort(function(a, b){return a-b});
    for(var i = 0; i < json.hours.length; i++){
        // noinspection JSAnnotator
        compare.info.push({ "employeeID" :json.employeeID[i],
            "date" : json.date[i],
            "hours" :  json.hours[i],
            "description" :json.description[i]
        });
    }
    var sorted = compare.info.sort(function(a, b){return a.employeeID-b.employeeID});



    alert(JSON.stringify(sorted));
}
function sortDate() {
    var json = JSON.parse(localStorage.getItem("entries"));
    var compare = {"info" : []};
    //alert(json.hours);
    var prenum = compare.hours;
    var num = json.hours.sort(function(a, b){return a-b});
    for(var i = 0; i < json.hours.length; i++){
        // noinspection JSAnnotator
        compare.info.push({ "employeeID" :json.employeeID[i],
            "date" : json.date[i],
            "hours" :  json.hours[i],
            "description" :json.description[i]
        });
    }
    var sorted = compare.info.sort(function(a, b){return a.date-b.date});
    alert(JSON.stringify(sorted));
}
function sortHours() {
    var json = JSON.parse(localStorage.getItem("entries"));
    var compare = {"info" : []};
    //alert(json.hours);
    var prenum = compare.hours;
    var num = json.hours.sort(function(a, b){return a-b});
    for(var i = 0; i < json.hours.length; i++){
        // noinspection JSAnnotator
        compare.info.push({ "employeeID" :json.employeeID[i],
                            "date" : json.date[i],
                            "hours" :  json.hours[i],
                            "description" :json.description[i]
                            });
    }

    var sorted = compare.info.sort(function(a, b){return a.hours-b.hours});
    alert(JSON.stringify(sorted));
}
function sortDescription() {
    var json = JSON.parse(localStorage.getItem("entries"));
    var compare = {"info" : []};
    //alert(json.hours);
    var prenum = compare.hours;
    var num = json.hours.sort(function(a, b){return a-b});
    for(var i = 0; i < json.hours.length; i++){
        // noinspection JSAnnotator
        compare.info.push({ "employeeID" :json.employeeID[i],
            "date" : json.date[i],
            "hours" :  json.hours[i],
            "description" :json.description[i]
        });
    }
    var sorted = compare.info.sort(function(a, b){return a.description-b.description});
    alert(JSON.stringify(sorted));
}
