// code voor qrcode

const html5Qrcode = new Html5Qrcode('reader');
const qrCodeSuccessCallback = (decodedText, decodedResult) => {
    if (decodedText) {
        document.getElementById('betaalt').style.display = 'block';
        const klant = decodedText;
        html5Qrcode.stop();
    }
}
const config = { fps: 3, qrbox: { width: 250, height: 250 } }
html5Qrcode.start({ facingMode: "environment" }, config, qrCodeSuccessCallback);

// code voor knop terug

const terug = document.getElementById("terug");
terug.onclick = function () {
    const pagina = localStorage.getItem('pagina')
    if (pagina === 'Bar') {
        window.location = 'bar.html'
    }
}