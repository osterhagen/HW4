function isDateOk (date) {
    var arr = date.split('/');
    if (arr.length != 3){
        return false;
    } else {
        arr[0] = parseFloat(arr[0]);
        arr[1] = parseFloat(arr[1]);
        arr[2] = parseFloat(arr[2]);
        if(isNaN(arr[0]) == true || isNaN(arr[1]) == true || isNaN(arr[2]) == true){
            return false;
        }
        return true;
    }
}

function editLoad() {
    var today = new Date();
    var month = today.getMonth();
    var day = today.getDate();
    var year = today.getFullYear();
    document.getElementById('EmployeeID').value = sessionStorage.getItem("username");
    document.getElementById('EmployeeID').readOnly = true;
    document.getElementById('dateWorked').value = month + "/" + day + "/" + year;
}

function logNewEntry() {
    var employeeIN = sessionStorage.getItem("username");
    var hoursIN = document.getElementById("hoursWorked").value;
    var dateIN = document.getElementById("dateWorked").value;
    var descriptionIN = document.getElementById("descriptionBox").value;
    if (employeeIN == null ||
        isDateOk(dateIN) == false ||
        ((hoursIN-Math.floor(hoursIN))*100)%15 != 0 ||
        descriptionIN.length < 20){
        alert("Make sure your Employee ID is entered, your work hours"+
            " are in correct format, you have inputted a valid date, and your "+
            " description is atleast 20 characters long");
    }
    var json = {
        employeeID:[employeeIN],
        date:[dateIN],
        hours:[hoursIN],
        description:[descriptionIN]
    };
    var inp = JSON.parse(localStorage.getItem("entries"));
    if (inp == null) {
        localStorage.setItem("entries", JSON.stringify(json));
    }
    else {
        var user = JSON.parse(localStorage.getItem("entries"));
        //alert(JSON.stringify(user) + "sdsdsds");
        user.employeeID.push(employeeIN);
        user.hours.push(hoursIN);
        user.date.push(dateIN);
        user.description.push(descriptionIN);
        localStorage.setItem("entries", JSON.stringify(user));
    }
    document.getElementById("hoursWorked").value = " ";
    document.getElementById("descriptionBox").value = " ";
    document.getElementById("billable").value = " ";
    //window.location.href = "Main.html";
    return;
}

function edit(number){
    //alert("made as,dm asd sadsad");
    //alert(number);
    document.getElementById('deleteButton').removeAttribute("hidden");
    var json = JSON.parse(localStorage.getItem("entries"));
    document.getElementById('EmployeeID').value = json.employeeID[number];
    document.getElementById('hoursWorked').value = json.hours[number];
    document.getElementById('descriptionBox').value = json.description[number];
    document.getElementById('dateWorked').value = json.date[number];
    localStorage.setItem("number", number+"");
    var modal = document.getElementById('myModal');
    modal.style.display = "block";
}
function refresh() {
    var modal3 = document.getElementById('confirmModal');
    modal3.style.display = "none";
}
function determine() {
    //alert( document.getElementById("yes").value);

    document.getElementById("confirmMessage").innerHTML = "Are you sure you want to delete?";
    var modal3 = document.getElementById('confirmModal');
    modal3.style.display = "block";


}
function determineSave() {
    //alert( document.getElementById("yes").value);
    if(localStorage.getItem("number") != null){
        document.getElementById("confirmMessage").innerHTML = "Are you sure you want to change this input?";
        var modal3 = document.getElementById('confirmModal');
        modal3.style.display = "block";
        document.getElementById("yes").onclick = save();

    }
    else {
        save();
    }

}
function save() {
    //alert("made");
    //alert("a");
    var employeeIN = document.getElementById("EmployeeID").value;
    var hoursIN = document.getElementById("hoursWorked").value;
    var dateIN = document.getElementById("dateWorked").value;
    var descriptionIN = document.getElementById("descriptionBox").value;

    //alert("b");
    if (employeeIN == null ||isDateOk(dateIN) == false ||
        ((hoursIN-Math.floor(hoursIN))*100)%15 != 0 ||descriptionIN.length < 20){
        document.getElementById("alertMessage").innerHTML = "Make sure your Employee ID is entered, your work hours"+
            " are in correct format, you have inputted a valid date, and your "+
            " description is at least 20 characters long please reload the page to continue.";
        //alert("s");
        var modal2 = document.getElementById('alertModal');
        modal2.style.display = "block";
        //alert("sa");
        return;
    }
    //alert("c");
    var number = -1;
    if (localStorage.getItem("number") != null){
        number = parseFloat(localStorage.getItem("number"));
    }
    else {localStorage.removeItem("number");}
    if(number > -1){
        //document.getElementById("cMC").innerHTML = "Entry updated! Reload page to view";
        var json = JSON.parse(localStorage.getItem("entries"));
        json.employeeID[number] = document.getElementById("EmployeeID").value;
        json.hours[number] = document.getElementById("hoursWorked").value;
        json.description[number] = document.getElementById("descriptionBox").value;
        json.date[number] = document.getElementById("dateWorked").value;
        //alert(JSON.stringify(json));
        localStorage.setItem("entries", JSON.stringify(json));
        localStorage.removeItem("number");
        //window.location.href = "Main.html";
        return;
    }
    else{

        //alert("d");
        document.getElementById("alertMessage").innerHTML = "New Entry Added! Reload page to view";
        //alert("s");
        var modal2 = document.getElementById('alertModal');
        modal2.style.display = "block";
        logNewEntry();
    }

}
function deleteRow() {
    var remove = -1;
    if (localStorage.getItem("number") != null){
        remove = parseFloat(localStorage.getItem("number"));
    }
    //alert(number);
    if(remove > -1){
        var modal3 = document.getElementById('confirmModal');
        modal3.style.display = "none";
        document.getElementById("alertMessage").innerHTML = "Entry Deleted! Reload page to view";
        //alert("s");
        var modal2 = document.getElementById('alertModal');
        modal2.style.display = "block";
        var del = JSON.parse(localStorage.getItem("entries"));
        del.employeeID.splice(remove,1);
        del.date.splice(remove,1);
        del.hours.splice(remove,1);
        del.description.splice(remove,1);
        localStorage.setItem("entries", JSON.stringify(del));
        return;
    }
    // var s = inp.hours.reduce(function(p,c){
    //     return parseFloat(p)-parseFloat(c);
    // });
    //document.getElementById("inbetween").innerHTML = "Total hours worked:" + s;
    //alert(remove);
    //window.location.href = "Main.html";
}
