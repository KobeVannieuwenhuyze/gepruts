const path = window.location.pathname;

const artiekels_prijs = { 'bockor': 3, 'carlsberg': 3, 'omer': 5, 'duvel': 5, 'kriek': 3, 'rouge': 4, 'cola': 3, 'colazero': 3, 'fanta': 3, 'icetea': 3, 'platwater': 2, 'spuitwater': 2, 'witglas': 5, 'roseglas': 5, 'roodglas': 5, 'witfles': 18, 'rosefles': 18, 'roodfles': 18, 'cavaglas': 6, 'cavafles': 22, 'chips': 2, 'aperobordje': 4, 'beker/glas': 1, 'beker': -1 };
var artiekels_aantal = {};
const params = new URLSearchParams(window.location.search);
for (const [key, value] of params.entries()) {
    artiekels_aantal[key] = parseInt(value);
}
for (let label in artiekels_prijs) {
    if (!(label in artiekels_aantal)) {
        artiekels_aantal[label] = 0;
    }
}
var prijs = 0;
  

if (path.includes("index.html")) {
    // Verschillende artiekelen
const bockor = document.getElementById("bockor");
const carlsberg = document.getElementById("carlsberg");
const omer = document.getElementById("omer");
const duvel = document.getElementById("duvel");
const kriek = document.getElementById("kriek");
const rouge = document.getElementById("rouge");
const cola = document.getElementById("cola");
const colazero = document.getElementById("colazero");
const fanta = document.getElementById("fanta");
const acetea = document.getElementById("icetea");
const platwater = document.getElementById("platwater");
const spuitwater = document.getElementById("spuitwater");
const witglas = document.getElementById("witglas");
const roseglas = document.getElementById("roseglas");
const roodglas = document.getElementById("roodglas");
const witfles = document.getElementById("witfles");
const rosefles = document.getElementById("rosefles");
const roodfles = document.getElementById("roodfles");
const cavaglas = document.getElementById("cavaglas");
const cavafles = document.getElementById("cavafles");
const chips = document.getElementById("chips");
const aperobordje = document.getElementById("aperobordje");
const nieuwebeker = document.getElementById("beker/glas");
const beker = document.getElementById("beker");

//Initialisatie van nummering
initialisatie('bockor', bockor);
initialisatie('carlsberg', carlsberg);
initialisatie('omer', omer);
initialisatie('duvel', duvel);
initialisatie('kriek', kriek);
initialisatie('rouge', rouge);
initialisatie('cola', cola);
initialisatie('colazero', colazero);
initialisatie('fanta', fanta);
initialisatie('icetea', icetea);
initialisatie('platwater', platwater);
initialisatie('spuitwater', spuitwater);
initialisatie('witglas', witglas);
initialisatie('roseglas', roseglas);
initialisatie('roodglas', roodglas);
initialisatie('witfles', witfles);
initialisatie('rosefles', rosefles);
initialisatie('roodfles', roodfles);
initialisatie('cavaglas', cavaglas);
initialisatie('cavafles', cavafles);
initialisatie('chips', chips);
initialisatie('aperobordje', aperobordje);
initialisatie('beker/glas', nieuwebeker)
initialisatie('beker', beker);

// Werkend maken nummering
nummering('bockor', bockor);
nummering('carlsberg', carlsberg);
nummering('omer', omer);
nummering('duvel', duvel);
nummering('kriek', kriek);
nummering('rouge', rouge);
nummering('cola', cola);
nummering('colazero', colazero);
nummering('fanta', fanta);
nummering('icetea', icetea);
nummering('platwater', platwater);
nummering('spuitwater', spuitwater);
nummering('witglas', witglas);
nummering('roseglas', roseglas);
nummering('roodglas', roodglas);
nummering('witfles', witfles);
nummering('rosefles', rosefles);
nummering('roodfles', roodfles);
nummering('cavaglas', cavaglas);
nummering('cavafles', cavafles);
nummering('chips', chips);
nummering('aperobordje', aperobordje);
nummering('beker/glas', nieuwebeker)
nummering('beker', beker);

// Code voor knop betalen
const berekenen = document.getElementById("berekenen");
berekenen.onclick = function () {
    for (label in artiekels_aantal) {
        prijs += artiekels_aantal[label] * artiekels_prijs[label];
    }
    localStorage.setItem("artiekels_aantal", JSON.stringify(artiekels_aantal));
    let query = '';
for (let label in artiekels_aantal) {
    if (artiekels_aantal[label] > 0) {
        query += `${encodeURIComponent(label)}=${artiekels_aantal[label]}&`;
    }
}
query = query.slice(0, -1); // verwijdert laatste &
window.location = `betalen.html?${query}`;
}
}
else if (path.includes("betalen.html")) {
    for (label in artiekels_aantal) {
        prijs += artiekels_aantal[label] * artiekels_prijs[label];
    }
    document.getElementById('prijs').textContent = prijs;

// Overzichtslijst maken
const main = document.getElementById('main');
for (let label in artiekels_aantal) {
    if (artiekels_aantal[label] != 0 && label != 'beker')
    {
        let lijn = document.createElement("h4");
        lijn.innerHTML = artiekels_aantal[label] + ' x ' + label;
        main.insertBefore(lijn, main.children[2]);
    }
}

// Code voor koppen
const wijzigen = document.getElementById("wijzigen");
wijzigen.onclick = function () {
    let query = '';
    for (let label in artiekels_aantal) {
        if (artiekels_aantal[label] > 0) {
            query += `${encodeURIComponent(label)}=${artiekels_aantal[label]}&`;
        }
    }
    query = query.slice(0, -1);
    window.location = `index.html?${query}`;
}
const nieuw = document.getElementById("nieuw");
nieuw.onclick = function () {
    for (let label in artiekels_aantal) {
        artiekels_aantal[label] = 0;
    }
    localStorage.setItem("artiekels_aantal", JSON.stringify(artiekels_aantal));
    window.location = 'index.html';
}

}

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
        else if (e.target.tagName === "DIV") {
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
        figurecaption.innerHTML = artiekels_aantal[soort];
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

function initialisatie (soort, moederelement)
{
    if(artiekels_aantal[soort] != 0)
    {
        let kruis = document.createElement("span");
        kruis.innerHTML = "\u00d7";
        moederelement.insertBefore(kruis, moederelement.children[0]);
        let figurecaption = document.createElement("figcaption");
        figurecaption.innerHTML = artiekels_aantal[soort];
        moederelement.insertBefore(figurecaption, moederelement.children[0]);
    }
}