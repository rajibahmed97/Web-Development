
var gbp, usd, eur, cad, bdt;
function start()
{
    gbp = document.getElementById("GBP");
    usd = document.getElementById("USD");
    eur = document.getElementById("EUR");
    cad = document.getElementById("CAD");
    bdt = document.getElementById("BDT");
}

function USD_calculation()
{
    gbp.value = parseFloat(usd.value) * 2.03032;
    eur.value = parseFloat(usd.value) * 1.41544;
    cad.value = parseFloat(usd.value) * 1.01941;
    bdt.value = parseFloat(usd.value) * 84.00;
}

function GBP_calculation()
{
    usd.value = parseFloat(gbp.value) * 0.49246;
    eur.value = parseFloat(gbp.value) * 0.69714;
    cad.value = parseFloat(gbp.value) * 0.50221;
    bdt.value = parseFloat(gbp.value) * 118.48;
}

function EUR_calculation()
{
    gbp.value = parseFloat(eur.value) * 1.43448;
    usd.value = parseFloat(eur.value) * 0.70641;
    cad.value = parseFloat(eur.value) * 0.72037;
    bdt.value = parseFloat(eur.value) * 102.45 ;
}

function CAD_calculation()
{
    gbp.value = parseFloat(cad.value) * 1.99169;
    usd.value = parseFloat(cad.value) * 0.98054;
    eur.value = parseFloat(cad.value) * 1.38814;
    bdt.value = parseFloat(cad.value) * 67.27;
}

function BDT_calculation()
{
    gbp.value = parseFloat(bdt.value) * 0.0084;
    usd.value = parseFloat(bdt.value) * 0.012;
    eur.value = parseFloat(bdt.value) * 0.0098;
    cad.value = parseFloat(bdt.value) * 0.015;    
    
}

start();
