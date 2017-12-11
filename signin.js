var modal1 = document.getElementById('myModal1');
var btn1 = document.getElementById("submitOut");
var modal2 = document.getElementById('alertModal');
function load() {
    if (localStorage.getItem("params") != null)
        display(JSON.parse(localStorage.getItem("params")));
    else if (localStorage.getItem("entries") != null)
        display(JSON.parse(localStorage.getItem("entries")));
    if(localStorage.getItem("username") != null){
        document.getElementById("employeesID").value = localStorage.getItem("username");
    }
    modal1.style.display = "block";
    modal2.style.display = "none";
}

btn1.onclick = function() {
    var bool = false;
    var userNames=["username","razao","abc","kdlutes","pleaseGiveMe"];
    var passwords=["password","onepurdue","123","isAwesome","anA"];
    var employeeID = document.getElementById("employeesID").value;
    var password = document.getElementById("password").value;
//TODO: implement remembering of password

    if((userNames.indexOf(employeeID) != passwords.indexOf(password))){
        localStorage.removeItem("username");
        // change to modal
        document.getElementById("alertMessage").innerHTML = "Username and/or password is incorrect, please reload page";
        modal2.style.display = "block";
        bool = false;
        //location.reload();
        //document.getElementById("employeeID").value = "";


    }
    else if((userNames.indexOf(employeeID) == -1 || passwords.indexOf(password) == -1)){
        localStorage.removeItem("username","");
        modal2.style.display = "block";
        bool = false;
        //location.reload();
        //document.getElementById("employeeID").value = "";
        localStorage.removeItem(employeeID);
    }
    else {
        sessionStorage.setItem("username",employeeID);
        if(document.getElementById("checked").checked == true){
            localStorage.setItem("username", employeeID);
        }

        modal1.style.display = "none";
    }
}

