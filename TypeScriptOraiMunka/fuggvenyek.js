"use strict";
exports.__esModule = true;
//visszatérési érték és paraméter nélküli eljárás
function ILoveTypeScript() {
    document.write("Szeretem a TypeScriptet");
}
//visszatérési érték nélküli és paraméteres eljárás
function NegyzetKeruletTeruletEljaras(a) {
    var kerulet = 4 * a;
    var terulet = a * a;
    document.write("<br>A(z) ".concat(a, " oldal\u00FA ny\u00E9gyzet ker\u00FClete:").concat(kerulet));
    document.write("<br>A(z) ".concat(a, " oldal\u00FA ny\u00E9gyzet ter\u00FClete:").concat(terulet));
}
//visszatérési értékes és paraméter nélküli függvény
function RandomGeneralao100Fuggveny() {
    return Math.round(Math.random() * 100);
}
//visszatérési értékes és paraméteres függvény
function NegyzetKeruletFuggveny(a) {
    return 4 * a;
}
//Téglalap kerület terület eljárás
function TeglalapKeruletTerulet(a, b) {
    var kerulet = 2 * (a + b);
    var terulet = a * b;
    document.write("<br>A(z) ".concat(a, " \u00E9s ").concat(b, " oldal\u00FA t\u00E9glalap ker\u00FClete:").concat(kerulet));
    document.write("<br>A(z) ".concat(a, " \u00E9s ").concat(b, " oldal\u00FA t\u00E9glalap ter\u00FClete:").concat(terulet));
}
//PárosE függvény
//szám bemeneti paraméter és logikai értékkel kell visszatérni
function ParosE(vizsgalandoSzam) {
    if (vizsgalandoSzam % 2 == 0) {
        return true;
    }
    return false;
}
