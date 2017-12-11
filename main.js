
function display(inp) {
    console.log("s");
    //more interactive and better if user can see the newest one first
    for (var i = 0; i < inp.employeeID.length; i++) {
        var table = document.getElementById("entries");
        var row = table.insertRow(1);
        row.id = ""+i;
        row.ondblclick = function() {
            edit( this.id);

        };
        var cell1 = row.insertCell(0);
        cell1.innerHTML = inp.employeeID[i];
        var cell2 = row.insertCell(1);
        cell2.innerHTML = inp.date[i];
        var cell3 = row.insertCell(2);
        cell3.innerHTML = inp.hours[i];
        var cell4 = row.insertCell(3);
        cell4.innerHTML = inp.description[i];

        var s = inp.hours.reduce(function(p,c){
            return parseFloat(p)+parseFloat(c); ///// returns sum
        });
        document.getElementById("inbetween").innerHTML = "Total hours worked:" + s;

    }

}
// TODO 1: edit and remove
// TODO 2: params

function reloadWithParams(){
    var str = document.getElementById("description").value;
    var from = document.getElementById("from").value;
    var to = document.getElementById("to").value;
    var showcurrent = document.getElementById("boolchecked").checked;
    //alert(showcurrent);
    var user = {
        employeeID:[],
        date:[],
        hours:[],
        description:[]
    };
    var bool = {
        employeeID:[],
        date:[],
        hours:[],
        description:[]
    };
    var json = JSON.parse(localStorage.getItem("entries"));
    for (var i = 0; i < json.description.length; i++) {
        if(json.description[i].indexOf(str) != -1){
            user.employeeID.push(json.employeeID[i]);
            user.hours.push(json.hours[i]);
            user.date.push(json.date[i]);
            user.description.push(json.description[i]);
        }
    }

    for (var i = 0; i < json.employeeID.length; i++) {
        if(showcurrent == true){
            if(user.employeeID[i] == sessionStorage.getItem("username")){
                bool.employeeID.push(json.employeeID[i]);
                bool.hours.push(json.hours[i]);
                bool.date.push(json.date[i]);
                bool.description.push(json.description[i]);
            }
        }
    }

    localStorage.setItem("params",JSON.stringify(user));
    if(showcurrent == true)
        localStorage.setItem("params",JSON.stringify(bool));
    location.reload();

}
