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
/*
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


    }*/
    //griglia();

    generaArray();
}

function generaArray() {
    var a = new Array(10);

    for (var i = 0; i < a.length; i++) {
        a[i] = new Array(10);
    }

    // stampa obliqua

    for (var col = 0; col < 5;) {

        var parolaObliqua = Math.floor(Math.random() * 1000); // numero casuale per parola
        parolaObliqua = listaParole[parolaObliqua]; // prende numero casuale per la lista
        parolaObliqua = parolaObliqua.toUpperCase(); // mette tuttte le lettere in maiuscolo
        var xObliqua = 0;
        var yObliqua = 0;

        
        xObliqua = Math.floor(Math.random() * (10 - parolaObliqua.length));
        yObliqua = Math.floor(Math.random() * (10 - parolaObliqua.length));
        if (xObliqua >= 0 || yObliqua >= 0){
            var startXObliqua = xObliqua;
            var startYObliqua = yObliqua;
            err = 0;
    
            for (var l = 0; l < parolaObliqua.length; l++) {
              
                if (a[xObliqua][yObliqua] == parolaObliqua[l] || a[xObliqua][yObliqua] == null) {
                   // console.log(`parola ${parolaVerticale}, riga ${l}, col ${col}, len ${parolaVerticale.length}`);
                    //console.log(err);
                    yObliqua++;
                    xObliqua++;
                } else {
                    err = 1;
                }
    
            }
    
           
    
            if (err == 0) {
                xObliqua = startXObliqua;
                yObliqua = startYObliqua;
                for (var i = 0; i < parolaObliqua.length; i++) {
                    console.log(`parola ${parolaObliqua}, riga ${l}, col ${col}, len ${parolaObliqua.length}, obliqua`);
                    a[xObliqua][yObliqua] = parolaObliqua[i];
                    xObliqua++;
                    yObliqua++;
                    
    
                }
                col++;
            }
    
        }
       


    }
    

    //-----------------------------------------------------------------------------------------------------------------------------------------

    // stampa orizzontale


   for (var col = 0; col < 5;) {

        var parolaOrizzontale = Math.floor(Math.random() * 1000); // numero casuale per parola
        parolaOrizzontale = listaParole[parolaOrizzontale]; // prende numero casuale per la lista
        parolaOrizzontale = parolaOrizzontale.toUpperCase(); // mette tuttte le lettere in maiuscolo
        var xOrizzontale = 0;
        var yOrizzontale = 0;

        
        xOrizzontale = Math.floor(Math.random() * (10 - parolaOrizzontale.length));
        yOrizzontale = Math.floor(Math.random() * (10 - parolaOrizzontale.length));
        if (xOrizzontale >= 0 || yOrizzontale >= 0){
            var startXOrizzontale = xOrizzontale;
            var startYOrizzontale = yOrizzontale;
            err = 0;
    
            for (var l = 0; l < parolaOrizzontale.length; l++) {
              
                if (a[xOrizzontale][yOrizzontale] == parolaOrizzontale[l] || a[xOrizzontale][yOrizzontale] == null) {
                    //console.log(`parola ${parolaVerticale}, riga ${l}, col ${col}, len ${parolaVerticale.length}`);
                    //console.log(err);
                    yOrizzontale++;
                   
                } else {
                    err = 1;
                }
    
            }
    
           
    
            if (err == 0) {
                xOrizzontale = startXOrizzontale;
                yOrizzontale = startYOrizzontale;
                for (var i = 0; i < parolaOrizzontale.length; i++) {
                    console.log(`parola ${parolaOrizzontale}, riga ${l}, col ${col}, len ${parolaOrizzontale.length}, orizzontale`);
                    a[xOrizzontale][yOrizzontale] = parolaOrizzontale[i];
               
                    yOrizzontale++;
                    
    
                }
                col++;
            }
    
        }
       


    }


//stampa verticale


    for (var col = 0; col < 5;) {

        var parolaVerticale = Math.floor(Math.random() * 1000); // numero casuale per parola
        parolaVerticale = listaParole[parolaVerticale]; // prende numero casuale per la lista
        parolaVerticale = parolaVerticale.toUpperCase(); // mette tuttte le lettere in maiuscolo
        var xVerticale = 0;
        var yVerticale = 0;

        xVerticale = Math.floor(Math.random() * (10 - parolaVerticale.length));
        yVerticale = Math.floor(Math.random() * (10 - parolaVerticale.length));
        
        if (xVerticale >= 0 || yVerticale >= 0){
            var startXVeticale = xVerticale;
            var startYVerticale = yVerticale;
            err = 0;
    
            for (var l = 0; l < parolaVerticale.length; l++) {
              
                if (a[xVerticale][yVerticale] == parolaVerticale[l] || a[xVerticale][yVerticale] == null) {
                    //console.log(`parola ${parolaVerticale}, riga ${l}, col ${col}, len ${parolaVerticale.length}`);
                    //console.log(err);
                    xVerticale++;
                   
                } else {
                    err = 1;
                }
    
            }
    
           
    
            if (err == 0) {
                xVerticale = startXVeticale;
                yVerticale = startYVerticale;
                for (var i = 0; i < parolaVerticale.length; i++) {
                    console.log(`parola ${parolaVerticale}, riga ${l}, col ${col}, len ${parolaVerticale.length}, verticale`);
                    a[xVerticale][yVerticale] = parolaVerticale[i];
               
                    xVerticale++;
                    
    
                }
                col++;
            }
    
        }
       


    }











    var table = "<table>";

    for (var col = 0; col < 10; col++) {
        table += "<tr>";
        for (var l = 0; l < 10; l++) {
           
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
