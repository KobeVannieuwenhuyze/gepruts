// Verschillende artiekelen
const pils = document.getElementById("pils");
const carlsberg00 = document.getElementById("carlsberg00");
const cola = document.getElementById("cola");
const fanta = document.getElementById("fanta");
const acetea = document.getElementById("acetea");
const water = document.getElementById("water");

var artiekels_aantal = { 'pils': 0, 'carlsberg00': 0, 'cola': 0, 'fanta': 0, 'acetea': 0, 'water': 0 };
const artiekels_prijs = { 'pils': 2, 'carlsberg00': 2, 'cola': 2, 'fanta': 2, 'acetea': 2, 'water': 0 };

// Werkend maken nummering
nummering('pils', pils);
nummering("carlsberg00", carlsberg00);
nummering("cola", cola);
nummering("fanta", fanta);
nummering("acetea", acetea);
nummering("water", water);



// Vanaf hier niet verder aanpassen



// Code voor knop betalen
const betalen = document.getElementById("betalen");

betalen.onclick = function () {
    let prijs = 0;
    for (label in artiekels_aantal) {
        prijs += artiekels_aantal[label] * artiekels_prijs[label];
    }
    alert(prijs + ' euro');
    const pagina = document.getElementById('pagina').textContent;
    localStorage.setItem('pagina', pagina);
    localStorage.setItem('prijs', prijs);
    window.location = 'betalen.html';
}



//Functies



// Functies voor nummmering
function nummering(soort, moederelement) {
    moederelement.addEventListener("click", function (e) {
        if (e.target.tagName === "SPAN") {
            artiekels_aantal[soort] -= 1;
            negatief(soort, moederelement);
        }
        else if (e.target.tagName === "IMG") {
            artiekels_aantal[soort] += 1;
            positief(soort, moederelement);
        }
    });
}

function positief(soort, moederelement) {
    if (artiekels_aantal[soort] === 1) {
        let kruis = document.createElement("span");
        kruis.innerHTML = "\u00d7";
        moederelement.insertBefore(kruis, moederelement.children[0]);
        let figurecaption = document.createElement("figcaption");
        figurecaption.innerHTML = 1;
        moederelement.insertBefore(figurecaption, moederelement.children[0]);
    }
    else {
        moederelement.removeChild(moederelement.firstElementChild);
        let figurecaption = document.createElement("figcaption");
        figurecaption.innerHTML = artiekels_aantal[soort];
        moederelement.insertBefore(figurecaption, moederelement.children[0]);
    }
}

function negatief(soort, moederelement) {
    if (artiekels_aantal[soort] === 0) {
        moederelement.removeChild(moederelement.firstElementChild);
        moederelement.removeChild(moederelement.firstElementChild);
    }
    else {
        moederelement.removeChild(moederelement.firstElementChild);
        let figurecaption = document.createElement("figcaption");
        figurecaption.innerHTML = artiekels_aantal[soort];
        moederelement.insertBefore(figurecaption, moederelement.children[0]);
    }
}