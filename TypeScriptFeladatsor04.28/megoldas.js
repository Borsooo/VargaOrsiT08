"use strict";
exports.__esModule = true;
//1. feladat  
function DiakInfo(nev, csoport, tipus) {
    if (tipus == true) {
        return nev + " [Team0" + csoport + "]-Junior Frontend";
    }
    else {
        return nev + " [Team0" + csoport + "]-Webfejlesztő";
    }
}
//2. feladat 
function SzovegesErtekeles(jegy) {
    if (jegy == 5) {
        return ["Példás", "Példás"];
    }
    else if (jegy == 4) {
        return ["Jó", "Jó"];
    }
    else if (jegy == 3) {
        return ["Változó", "Változó"];
    }
    else if (jegy == 2) {
        return ["Hanyag", "Rossz"];
    }
    else {
        return ["hibás érték", "Hibás érték"];
    }
}
//3. feladat 
function HarommalOszthatokSzama(adatTomb) {
    var darab = 0;
    for (var i = 0; i < adatTomb.length; i++) {
        if (adatTomb[i] % 3 == 0) {
            darab++;
        }
        return darab;
    }
}
//4. feladat 
function NyeroSzamok(mennyiseg, alsoHatar, felsoHatar) {
    var i = 0;
    var nyeroSzamok = [];
    while (i < mennyiseg) {
        var generaltSzam = Math.round(Math.pow(Math.random(), (felsoHatar - alsoHatar))) + alsoHatar;
        var szerepelE = false;
        for (var j = 0; i < nyeroSzamok.length; j++) {
            if (nyeroSzamok[j] == generaltSzam) {
                szerepelE = true;
            }
        }
        if (szerepelE == false) {
            nyeroSzamok.push(generaltSzam);
            i++;
        }
        return nyeroSzamok;
    }
}
