export { };

//visszatérési érték és paraméter nélküli eljárás
function ILoveTypeScript(): void {
    document.write("Szeretem a TypeScriptet");
}

//visszatérési érték nélküli és paraméteres eljárás
function NegyzetKeruletTeruletEljaras(a: number): void {
    let kerulet = 4 * a;
    let terulet = a * a;
    document.write(`<br>A(z) ${a} oldalú nyégyzet kerülete:${kerulet}`);
    document.write(`<br>A(z) ${a} oldalú nyégyzet területe:${terulet}`);
}

//visszatérési értékes és paraméter nélküli függvény
function RandomGeneralao100Fuggveny(): number {
    return Math.round(Math.random() * 100);
}

//visszatérési értékes és paraméteres függvény
function NegyzetKeruletFuggveny(a: number): number {
    return 4 * a;
}

//Téglalap kerület terület eljárás
function TeglalapKeruletTerulet(a: number, b: number): void {
    let kerulet = 2 * (a + b);
    let terulet = a * b;
    document.write(`<br>A(z) ${a} és ${b} oldalú téglalap kerülete:${kerulet}`);
    document.write(`<br>A(z) ${a} és ${b} oldalú téglalap területe:${terulet}`);
}

//PárosE függvény
//szám bemeneti paraméter és logikai értékkel kell visszatérni
function ParosE(vizsgalandoSzam: number): boolean {
    if (vizsgalandoSzam % 2 == 0) {
        return true;
    }
    return false;
}