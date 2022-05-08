export { };
//Tuple
var tupleMinta: [string, number];
tupleMinta = ["Kis József", 22];
console.log(tupleMinta[0]);


var kerTerFeladat: [number, number];
kerTerFeladat = [22, 30];

//Enum
enum fizetesTipusok {
    juniorFrontEnd = 450000,
    juniorBackEnd = 500000,
    juniorFullStack = 600000,
    seniorFrontEnd = 900000,
    seniorBackEnd = 1000000,
    seniorFullTack = 12000000
}
var jozsiFizetes: fizetesTipusok = fizetesTipusok.juniorFrontEnd;
console.log(jozsiFizetes);


//Interface
interface Dolgozo {
    nev: string;
    eletkor: number;
    aktiv: boolean;
}
var interfaceObjektum: Dolgozo = { nev: "Kis József", eletkor: 22, aktiv: true }
console.log(interfaceObjektum.nev);
console.log(interfaceObjektum.eletkor);
console.log(interfaceObjektum.aktiv);


//Prímszám generátor
//Határérték bemeneti paramáter(hatar1, hatar2)
//Egész szám értékkel térjen vissza, ami egy prímszám!
function PrimGenerator(hatar1: number, hatar2: number): number {
    let also: number;
    let felso: number;
    if (hatar1 < hatar2) {
        also = hatar1;
        felso = hatar2;
    }
    else {
        also = hatar2;
        felso = hatar1;
    }
    let probalkozasokSzama: number = 0;
    let sikeresGeneralas: boolean = false;
    let generaltSzam: number;
    do {
        let generaltSzam = Math.round(Math.random() * (felso - also) + also);
        probalkozasokSzama++;
        let oszto: number = 0;
        for (let i = 1; i <= generaltSzam; i++) {
            if (generaltSzam % i == 0) {
                oszto++;
            }
        }
        if (oszto == 2) {
            sikeresGeneralas = true;
        }
    }
    while (sikeresGeneralas == false || probalkozasokSzama < 100)
    return generaltSzam;


}

function TeglalapKeruletTeruletTupleFuggveny(a: number, b: number): [number, number] {
    let kerulet: number = 2 * (a + b);
    let terulet: number = a * b;
    return [kerulet, terulet];
}

//Univerzális tömb generátor
function UniverzalisTombGenerator(meret: number, alsoHatar: number, felsoHatar: number): Array<number> {
    let generaltTomb: Array<number> = [];
    for (let i = 0; i < meret; i++) {
        generaltTomb.push(Math.round(Math.random() * (felsoHatar - alsoHatar)) + alsoHatar);

    }
    return generaltTomb;
}
//Összegzés tétele TypeScript-ben
function OsszegzesTeteleTS(vizsgaltTomb: Array<number>): number {
    let osszeg: number = 0;
    for (let i = 0; i < vizsgaltTomb.length; i++) {
        osszeg += vizsgaltTomb[i];
    }
    return osszeg;
}