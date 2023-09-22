var listaParole;
var err = 0;

// funzione che serve per leggere il file che inserisce l'utente.
function readFile() {
    var fileInput = document.getElementById('dizionario');
    var file = fileInput.files[0]; // Ottieni il primo file selezionato
    var reader = new FileReader();
    reader.onload = function (e) {
        var parole = e.target.result;

        listaParole = parole.split('\n');
        //giraParola();

        stampa();
    };

    reader.readAsText(file);

}
// ------------------------------------------------------------------------------------------------------------------------

// funzione per la stampa delle parole 
function stampa() {

    for (var i = 0; i < listaParole.length; i++) {

        if (i < 9) {

            document.getElementById('output').innerHTML += listaParole[i] + "<br>";

        }


        if (i >= 10 && i < 19) {

            document.getElementById('output2').innerHTML += listaParole[i] + "<br>";


        } else if (i >= 20 && i < 29) {

            document.getElementById('output3').innerHTML += listaParole[i] + "<br>";
        } else if (i >= 30 && i < 39) {

            document.getElementById('output4').innerHTML += listaParole[i] + "<br>";
        } else if (i >= 40 && i < 49) {

            document.getElementById('output5').innerHTML += listaParole[i] + "<br>";
        }


    }
    //griglia();

    generaArray();
}

function generaArray() {
    var a = new Array(10);

    for (var i = 0; i < a.length; i++) {
        a[i] = new Array(10);
    }

    for (var col = 0; col < 4; col++) {

        var parolaRan = Math.floor(Math.random() * 1000);
        parolaRan = listaParole[parolaRan];
        parolaRan = parolaRan.toUpperCase();
        var x = Math.floor(Math.random() * (11 - parolaRan.length));
        var y = Math.floor(Math.random() * (11 - parolaRan.length));
        var startX = x;
        var startY = y;

        for (var l = 0; l < parolaRan.length; l++) {

            if (a[x][y] == parolaRan[l] || a[x][y] == undefined) {
                //console.log(`parola ${parolaRan}, riga ${riga}, col ${col}, len ${parolaRan.length}`);
                //console.log(err);
                y++;
                x++;
            } else {
                err = 1;
            }

        }

        if (err == 0) {
            x = startX;
            y = startY;
            for (var i = 0; i < parolaRan.length; i++) {
                console.log(`parola ${parolaRan}, riga ${l}, col ${col}, len ${parolaRan.length}`);
                a[x][y] = parolaRan[i];
                x++;
                y++;

            }
        }



    }

    //-----------------------------------------------------------------------------------------------------------------------------------------

    // stampa orizzontale


    for (var col = 0; col < 4; col++) {

        var parolaRan = Math.floor(Math.random() * 1000);
        parolaRan = listaParole[parolaRan];
        parolaRan = parolaRan.toUpperCase();
        var x = Math.floor(Math.random() * (11 - parolaRan.length));
        var y = Math.floor(Math.random() * (11 - parolaRan.length));
        var startX = x;
        var startY = y;

        for (var l = 0; l < parolaRan.length; l++) {

            if (a[x][y] == parolaRan[l] || a[x][y] == undefined) {
                //console.log(`parola ${parolaRan}, riga ${riga}, col ${col}, len ${parolaRan.length}`);
                //console.log(err);
                y++;
            } else {
                err = 1;
            }

        }

        if (err == 0) {
            x = startX;
            y = startY;
            for (var i = 0; i < parolaRan.length; i++) {
                console.log(`parola ${parolaRan}, riga ${l}, col ${col}, len ${parolaRan.length}`);
                a[x][y] = parolaRan[i];
                y++;

            }
        }



    }










    var table = "<table>";

    for (var col = 0; col < a.length; col++) {
        table += "<tr>";
        for (var l = 0; l < a[col].length; l++) {
            if (a[col][l] == undefined) {
                table += "<td>-</td>";
            } else {
                table += "<td>" + a[col][l] + "</td>";
            }

        }
        table += "</tr>";
    }
    table += "</table>";
    document.getElementById('si').innerHTML = table;

}
