/*eslint-env browser*/
/*eslint no-unused-vars: ["error", { "vars": "local" }]*/
/*global
alert, confirm, console, prompt
*/
var pressedluca = false,
    pressedalert = false,
    lucablock = document.getElementById("lucaballs");

lucablock.onclick = function () {
    "use strict";
    if (!pressedluca) {
        document.getElementById("alert").style.display = "block";
        pressedluca = true;
    } else {
        if (pressedalert) {
            document.getElementById("easteregg0").innerHTML = "Уже поздно - он рядом ♥";
        }
    }
};

document.getElementById("closebtn").onclick = function () {
    "use strict";
    this.parentElement.style.display = 'none';
    document.getElementById("easteregg0").innerHTML = "Теперь он знает где ты <3";
    pressedalert = true;
};