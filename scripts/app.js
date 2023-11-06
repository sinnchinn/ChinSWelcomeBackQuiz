let btnChange1 = document.getElementById("btnChange1");

let changeMe1 = document.getElementByid("changeMe1");

btnChange1.addEventListener("click", function(e) {
    changeMe1.innerText = "i like kirby";
    changeMe1.className = wickedCss[CssSelected];
});

let wickedCss = ["rollerLeft"]
let cssSelected = Math.floor(Math.random() * wickedCss.length);
console.log(cssSelected);