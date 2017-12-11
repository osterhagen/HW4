var modal = document.getElementById('myModal');

var btn = document.getElementById("add");

btn.onclick = function() {
    editLoad();
    modal.style.display = "block";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}