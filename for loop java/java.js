let cisla = [5,8,2,-3,9,-1];
for (let i=0; i<cisla.length; i++) {
    if (cisla[i]<0) {
        console.log("Naleteno záporné číslo:", cisla[i]);
        break;
    }
}

for (let i =1; i<=5; i++) {
    if (i % 2 !==0) {
        continue;
    }
    console.log("Sudé číslo",i);
}