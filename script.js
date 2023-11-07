
    const vysledky = []
    
    function bmicalculate() {
    const userkg = parseFloat(document.getElementById("userkg").value);
    const userm = parseFloat(document.getElementById("userm").value);

    const output = userkg / (userm * userm);

    document.getElementById("result").innerHTML = output

    
    if (output < 0) {
        document.getElementById("finalresult").textContent = "Nelze vypočítat negativní hodnotu";

    } else if (output < 18.5 && output > 0) {
        vysledky.push("Podváha");
        document.getElementById("finalresult").textContent = "Podváha";

    } else if (output >= 18.5 && output < 25) {
        vysledky.push("Normální váha");
        document.getElementById("finalresult").textContent = "Normální váha";

    } else if (output >= 25 && output < 30) {
        vysledky.push("Nadváha");
        document.getElementById("finalresult").textContent = "Nadváha";

    } else if (output >= 30) {
        vysledky.push("Obezita");
        document.getElementById("finalresult").textContent = "Obezita";

    } if (userkg == "end") {
        vysledky = []
    }

   
    document.getElementById("finalresultlog").innerHTML = vysledky;


    console.log(vysledky)
}
