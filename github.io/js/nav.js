var menuBars = document.getElementById('menu_bars');
var nav = document.getElementById('nav');
var toggle = true;

var menu1 = document.getElementById("menu").children[0].children[0]
var menu2 = document.getElementById("menu").children[1].children[0]
var menu3 = document.getElementById("menu").children[2].children[0]
var menu4 = document.getElementById("menu").children[3].children[0]
var menu5 = document.getElementById("menu").children[4].children[0]
var menu6 = document.getElementById("menu").children[5].children[0]
var menu7 = document.getElementById("menu").children[6].children[0]
var menu8 = document.getElementById("menu").children[7].children[0]
var menu9 = document.getElementById("menu").children[8].children[0]

menu1.setAttribute("href", "/hosting_index.html");
menu2.setAttribute("href", "/personality/test_self.html");
menu3.setAttribute("href", "/personality/forwarding_form.html");
menu4.setAttribute("href", "/dating/test_self.html");
menu5.setAttribute("href", "/dating/forwarding_form.html");
menu6.setAttribute("href", "/kkon/test_self.html");
menu7.setAttribute("href", "/kkon/forwarding_form.html");
menu8.setAttribute("href", "/incomplete.html");
menu9.setAttribute("href", "/incomplete.html");

menuBars.onmouseover = function () {
    menuBars.style.color = "#777777";
}
menuBars.onmouseout = function () {
    menuBars.style.color = "#333333";
}

menuBars.onclick = function () {
    if (toggle) {
        menuBars.style.color = "#777777";
        nav.style.display = "inline";
        toggle = false;
    } else {
        menuBars.style.color = "#333333";
        nav.style.display = "none";
        toggle = true;
    }

}