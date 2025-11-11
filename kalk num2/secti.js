let x = 2;
let y =20;

function soucet(){
    console.log(x+y);
}
soucet()

function soucin(){
    let y = soucin();
    let vysledek = y * 4;
    console.log(vysledek)
}
soucin()

function nacthodnoty(){
    let cis1 
    let cis2 
    let cis3 
    let vysledekcis = pocetodpocet();
    document.getElementById("vystup").innerHTML += " " + vysledek;
}

function pocetodpocet(cis1, cis2, cis3){
    return (cis1+cis2)*cis3;
}