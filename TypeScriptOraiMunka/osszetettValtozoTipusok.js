"use strict";
exports.__esModule = true;
//Tuple
var tupleMinta;
tupleMinta = ["Kis József", 22];
console.log(tupleMinta[0]);
var kerTerFeladat;
kerTerFeladat = [22, 30];
//Enum
var fizetesTipusok;
(function (fizetesTipusok) {
    fizetesTipusok[fizetesTipusok["juniorFrontEnd"] = 450000] = "juniorFrontEnd";
    fizetesTipusok[fizetesTipusok["juniorBackEnd"] = 500000] = "juniorBackEnd";
    fizetesTipusok[fizetesTipusok["juniorFullStack"] = 600000] = "juniorFullStack";
    fizetesTipusok[fizetesTipusok["seniorFrontEnd"] = 900000] = "seniorFrontEnd";
    fizetesTipusok[fizetesTipusok["seniorBackEnd"] = 1000000] = "seniorBackEnd";
    fizetesTipusok[fizetesTipusok["seniorFullTack"] = 12000000] = "seniorFullTack";
})(fizetesTipusok || (fizetesTipusok = {}));
var jozsiFizetes = fizetesTipusok.juniorFrontEnd;
console.log(jozsiFizetes);
var interfaceObjektum = { nev: "Kis József", eletkor: 22, aktiv: true };
console.log(interfaceObjektum.nev);
console.log(interfaceObjektum.eletkor);
console.log(interfaceObjektum.aktiv);
//Prímszám generátor
//Határérték bemeneti paramáter(hatar1, hatar2)
//Egész szám értékkel térjen vissza, ami egy prímszám!
function PrimGenerator(hatar1, hatar2) {
    var also;
    var felso;
    if (hatar1 < hatar2) {
        also = hatar1;
        felso = hatar2;
    }
    else {
        also = hatar2;
        felso = hatar1;
    }
    var probalkozasokSzama = 0;
    var sikeresGeneralas = false;
    var generaltSzam;
    do {
        var generaltSzam_1 = Math.round(Math.random() * (felso - also) + also);
        probalkozasokSzama++;
        var oszto = 0;
        for (var i = 1; i <= generaltSzam_1; i++) {
            if (generaltSzam_1 % i == 0) {
                oszto++;
            }
        }
        if (oszto == 2) {
            sikeresGeneralas = true;
        }
    } while (sikeresGeneralas == false || probalkozasokSzama < 100);
    return generaltSzam;
}
function TeglalapKeruletTeruletTupleFuggveny(a, b) {
    var kerulet = 2 * (a + b);
    var terulet = a * b;
    return [kerulet, terulet];
}
//Univerzális tömb generátor
function UniverzalisTombGenerator(meret, alsoHatar, felsoHatar) {
    var generaltTomb = [];
    for (var i = 0; i < meret; i++) {
        generaltTomb.push(Math.round(Math.random() * (felsoHatar - alsoHatar)) + alsoHatar);
    }
    return generaltTomb;
}
//Összegzés tétele TypeScript-ben
function OsszegzesTeteleTS(vizsgaltTomb) {
    var osszeg = 0;
    for (var i = 0; i < vizsgaltTomb.length; i++) {
        osszeg += vizsgaltTomb[i];
    }
    return osszeg;
}
