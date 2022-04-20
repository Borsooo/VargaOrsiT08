// hatáskör valtozoNev :tipus = érték;
var szam: number = 5;
var szoveg: string = "Szeretem a programozást";
var logikai: boolean = false;//vagy true


//Speciális változók
//:any
var barmi: any = "alma";
barmi = 5;
barmi = true;
document.write(barmi);


var ismeretlen: unknown = "alma";
ismeretlen = 5;
ismeretlen = true;
document.write(String(ismeretlen));


var szovegesTomb1: string[] = ["alma", "körte", "szilva", "barack"];
var szovegesTomb2: Array<string> = ["fps", "tps", "rts", "szimulator"];
var szamTomb: Array<number> = [3, 7, 13, 21, 42];