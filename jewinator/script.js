selectObdobi = document.getElementById("obdobi");
btnPotvrdit = document.getElementById("potvrdit");
vysledek = document.getElementById("vysledek");

    btnPotvrdit.addEventListener("click", () => {
        oblibeneObdobi = selectObdobi.value;

        if (oblibeneObdobi === "jaro") {
            vysledek.textContent = "Moje oblíbené roční období je Jaro!";
        } else if (oblibeneObdobi === "léto") {
            vysledek.textContent = "Moje oblíbené roční období je Léto!";
        } else if (oblibeneObdobi === "podzim") {
            vysledek.textContent = "Moje oblíbené roční období je Podzim!";
        } else if (oblibeneObdobi === "zima") {
            vysledek.textContent = "Moje oblíbené roční období je Zima!";
        } else {
            vysledek.textContent = "Prosím vyber platné období.";
        }
    })
