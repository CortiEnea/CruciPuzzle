// stampa delle parole da trovare sotto alla tabella

function stampa() {

    for (var i = 0; i < arrayParole.length; i++) {

        if (i >= parseInt(nParole / 2)) {
            arrayParole[i] = reverseString(arrayParole[i]);
        }
    }
    arrayParole.sort()
    for (var i = 0; i < arrayParole.length; i++) {

        if (i < 8) {
            document.getElementById('output').style.display = "block";
            document.getElementById('output').innerHTML += arrayParole[i] + "<br>";
        } else if (i >= 8 && i < 16) {
            document.getElementById('output2').style.display = "block";
            document.getElementById('output2').innerHTML += arrayParole[i] + "<br>";
        } else if (i >= 16 && i < 24) {
            document.getElementById('output3').style.display = "block";
            document.getElementById('output3').innerHTML += arrayParole[i] + "<br>";
        } else if (i >= 24 && i < 32) {
            document.getElementById('output4').style.display = "block";
            document.getElementById('output4').innerHTML += arrayParole[i] + "<br>";
        } else if (i >= 32 && i < 40) {
            document.getElementById('output5').style.display = "block";
            document.getElementById('output5').innerHTML += arrayParole[i] + "<br>";
        }
    }


}

//-------------------------------------------------------------------------------------------------------------------------



// stampa della tabella


/*function cercaColoreParola(row, col){
    let numParola = -1;
    for(numParola = 0; numParola < arrayPosizioniParole.length; numParola++){
        for(let cellaLettera = 0; cellaLettera < arrayPosizioniParole[numParola].length; cellaLettera++){

        }
    }
    return numParola;
}
*/
function randomRGBColor(){
    return `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.5)`;
}


function print() {
    var table = "<table>";
    
    for (var i = 0; i < dimensione; i++) {
        table += "<tr>";
  

        for (var j = 0; j < dimensione; j++) {
            colore = coloriCelle[i][j];
               
                table +=  "<td>" + array[i][j] + "</td>";          


        }
        table += "</tr>";
    }
    table += "</table>";
    

    document.getElementById('tabella').innerHTML = table;
}


