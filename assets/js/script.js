function menu() {
    var x = document.getElementById("nav");
    if (x.className === "nav") {
        x.className += " responsive";
    } else {
        x.className = "nav";
    }
}

function closeMenu() {
    var x = document.getElementById("nav");
    if (x.className === "nav responsive") {
        x.className = "nav";
    }
}