var x = false;
var y = false;

function fnc() {
    console.log("clicked");
    x = !x;
    if (x) {
        document.getElementById("lkbt").style.background = "red";
        document.getElementById("lkbt").style.color = "white";
    }
    else {
        document.getElementById("lkbt").style.background = "transparent";
        document.getElementById("lkbt").style.color = "black";
    }
}

function fnc2() {
    console.log("clicked");
    y = !y;
    if (y) {
        document.getElementById("lkbt2").style.background = "red";
        document.getElementById("lkbt2").style.color = "white";
    }
    else {
        document.getElementById("lkbt2").style.background = "transparent";
        document.getElementById("lkbt2").style.color = "black";
    }
}
