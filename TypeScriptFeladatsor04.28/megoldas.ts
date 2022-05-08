export { };

//1. feladat  
function DiakInfo(nev: string, csoport: number, tipus: boolean): string {
    if (tipus == true) {
        return nev + " [Team0" + csoport + "]-Junior Frontend";
    }
    else {
        return nev + " [Team0" + csoport + "]-Webfejlesztő";
    }
}
//2. feladat 
function SzovegesErtekeles(jegy: number): [string, string] {

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
function HarommalOszthatokSzama(adatTomb: Array<number>): number {
    let darab: number = 0;
    for (let i = 0; i < adatTomb.length; i++) {
        if (adatTomb[i] % 3 == 0) {
            darab++;
        }
        return darab;
    }
}
//4. feladat 
function NyeroSzamok(mennyiseg: number, alsoHatar: number, felsoHatar: number): Array<number> {
    let i = 0;
    let nyeroSzamok = [];
    while (i < mennyiseg) {
        let generaltSzam: number = Math.round(Math.random() * (felsoHatar - alsoHatar)) + alsoHatar;
        let szerepelE: boolean = false;
        for (let j = 0; i < nyeroSzamok.length; j++) {
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