var listaParole;
var err;

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


    generaArray();
}

function generaArray() {
    var a = new Array(10);
    var dir = ['v', 'or', 'ob'];

    for (var i = 0; i < a.length; i++) {
        a[i] = new Array(10);
    }

    // stampa obliqua




    for (var riga = 0; riga < 10;) {

        var parolaRan = Math.floor(Math.random() * 1000); // numero casuale per parola
        parolaRan = listaParole[parolaRan]; // prende numero casuale per la lista
        parolaRan = parolaRan.toUpperCase(); // mette tuttte le lettere in maiuscolo

        var direzione = dir[Math.floor(Math.random()*3)];
       

        if(direzione == "v"){
            var x = Math.floor(Math.random() * (10 - parolaRan.length));
            var y = Math.floor(Math.random() * (10));
        }else if(direzione == "ob"){
            var x = Math.floor(Math.random() * (10 - parolaRan.length));
            var y = Math.floor(Math.random() * (10- parolaRan.length));
        }else if(direzione == "or"){
            var x = Math.floor(Math.random() * (10));
            var y = Math.floor(Math.random() * (10- parolaRan.length));
        }else{
            console.log("m");
        }
        
   

        if (x >= 0 || y >= 0) {

            if(direzione == "v"){
                if (controllaVerticale(parolaRan, x, y)) {

                    for (var i = 0; i < parolaRan.length; i++) {
                        console.log(`parola ${parolaRan}, riga ${col}, col ${riga}, len ${parolaRan.length}`);
                        a[x][y] = parolaRan[i];
                     
                        x++;
    
                    }
                    riga++;
    
                }
            }else if(direzione == "or"){
                if (controllaOrizzontale(parolaRan, x, y)) {

                    for (var i = 0; i < parolaRan.length; i++) {
                        console.log(`parola ${parolaRan}, riga ${col}, col ${riga}, len ${parolaRan.length}`);
                        a[x][y] = parolaRan[i];
                        
                        y++;
    
                    }
                    riga++;
    
                }
            }else if(direzione == "ob"){
                if(controllaObliquo(parolaRan, x, y)){
                    for (var i = 0; i < parolaRan.length; i++) {
                        console.log(`parola ${parolaRan}, riga ${col}, col ${riga}, len ${parolaRan.length}`);
                        a[x][y] = parolaRan[i];
                        x++;
                        y++;
    
                    }
                    riga++;
                }
            }
            

        }



    }


    //-----------------------------------------------------------------------------------------------------------------------------------------



    function controllaVerticale(parola, X, Y) {

        if (X >= 0 || Y >= 0) {
            for (var i = 0; i < parola.length; i++) {
                if (a[X][Y] == parola[i] || a[X][Y] == null) {
                    X++;
              
                } else {
                    return false;
                }
            } 
            return true;
        }else{
            return false;
        }
    }
    function controllaOrizzontale(parola, X, Y) {

        if (X >= 0 || Y >= 0) {
            for (var i = 0; i < parola.length; i++) {
                if (a[X][Y] == parola[i] || a[X][Y] == null) {
                    Y++;
              
                } else {
                    return false;
                }
            } 
            return true;
        }else{
            return false;
        }
    }
    function controllaObliquo(parola, X, Y) {

        if (X >= 0 || Y >= 0) {
            for (var i = 0; i < parola.length; i++) {
                if (a[X][Y] == parola[i] || a[X][Y] == null) {
                    Y++;
                    X++;
              
                } else {
                    return false;
                }
            } 
            return true;
        }else{
            return false;
        }
    }





















    var table = "<table>";

    for (var riga = 0; riga < 10; riga++) {
        table += "<tr>";
        for (var col = 0; col < 10; col++) {

            if (a[riga][col] == undefined) {
                table += "<td>-</td>";
            } else {
                table += "<td>" + a[riga][col] + "</td>";
            }

        }

        table += "</tr>";
    }

    table += "</table>";

    document.getElementById('si').innerHTML = table;

}
