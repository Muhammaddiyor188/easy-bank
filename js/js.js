var i = 0;
var c = document.getElementsByClassName("menyu")[0];
var ch = document.getElementById("chiz12");
var ch1 = document.getElementById("chiz1");
var ch2 = document.getElementById("chiz3");
setInterval(b,1);
function bars() {    
    if(i == 0) {
        ch.style.animation = "chiz2 .7s forwards"
        ch1.style.animation = "chiz22 .7s forwards"
        ch2.style.animation = "chiz23 .7s forwards"
        c.style.display = "block";
        i = 1;
    } else {
        c.style.display = "none";
        i = 0
        ch1.style.animation = "chiz24 .7s forwards"
        ch2.style.animation = "chiz25 .7s forwards"
        ch.style.animation = "chiz21 .7s forwards"
    }
}
var d = 0;
function b() {
    var w = window.innerWidth;
    if (w > 808) {
        c.style.display = "block";
        d = 0;
    } else {
        if (d == 0) {
            c.style.display = "none";
            ch1.style.animation = "chiz24 .7s forwards"
            ch2.style.animation = "chiz25 .7s forwards"
            ch.style.animation = "chiz21 .7s forwards"
            d = 1;
        }
    }
}
window.onload = function() {
    window.setTimeout(function () {
        var b = document.getElementsByClassName("loader");
        b[0].style.display = "none"
    },600);
    
}