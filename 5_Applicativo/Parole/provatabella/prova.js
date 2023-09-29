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




    for (var riga = 0; riga < 50;) {

        var parolaRan = Math.floor(Math.random() * 1000); // numero casuale per parola
        parolaRan = listaParole[parolaRan]; // prende numero casuale per la lista
        parolaRan = parolaRan.toUpperCase(); // mette tuttte le lettere in maiuscolo
        if(riga >= 25){
            parolaRan = reverseString(parolaRan);
        }
        var direzione = dir[Math.floor(Math.random()*3)];
       
        // in base alla direzione faccio i random per le cordinate

        if(direzione == "v"){
            var y = Math.floor(Math.random() * (10 - parolaRan.length));
            var x = Math.floor(Math.random() * (10));
        }else if(direzione == "ob"){
            var y = Math.floor(Math.random() * (10 - parolaRan.length));
            var x = Math.floor(Math.random() * (10- parolaRan.length));
        }else if(direzione == "or"){
            var y = Math.floor(Math.random() * (10));
            var x = Math.floor(Math.random() * (10- parolaRan.length));
        }else{
            console.log("m");
        }
        
   

        if (y >= 0 || x >= 0) {

            if(direzione == "v"){
                if (controllaVerticale(parolaRan, y, x)) {

                    for (var i = 0; i < parolaRan.length; i++) {
                        console.log(`parola ${parolaRan}, riga ${y}, col ${x}, len ${parolaRan.length}`);
                        a[y][x] = parolaRan[i];
                     
                        y++;
    
                    }
                    riga++;
    
                }
            }else if(direzione == "or"){
                if (controllaOrizzontale(parolaRan, y, x)) {

                    for (var i = 0; i < parolaRan.length; i++) {
                        console.log(`parola ${parolaRan}, riga ${y}, col ${x}, len ${parolaRan.length}`);
                        a[y][x] = parolaRan[i];
                        
                        x++;
    
                    }
                    riga++;
    
                }
            }else if(direzione == "ob"){
                if(controllaObliquo(parolaRan, y, x)){
                    for (var i = 0; i < parolaRan.length; i++) {
                        console.log(`parola ${parolaRan}, riga ${y}, col ${x}, len ${parolaRan.length}`);
                        a[y][x] = parolaRan[i];
                        y++;
                        x++;
    
                    }
                    riga++;
                }
            }
            

        }



    }


    //-----------------------------------------------------------------------------------------------------------------------------------------

    





    // controllo che sia possibile stampare in verticale

    function controllaVerticale(parola, Y, X) {
        try{
            if (Y >= 0 || X >= 0) {
                for (var i = 0; i < parola.length; i++) {
                    if (a[Y][X] == parola[i] || a[Y][X] == null) {
                        Y++;
                  
                    } else {
                        return false;
                    }
                } 
                return true;
            }else{
                return false;
            }
        }catch{
            return false;
        }
        
    }


// controllo che sia possibile stampare in orizzontale


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



    // controllo che sia possibile stampare in obliquo

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

//--------------------------------------------------------------------------------------------------------------------------------------

// funzione per girare una parola



      function reverseString(str) {
        return str.split("").reverse().join("");
      }


//--------------------------------------------------------------------------------------------------------------------------


      // tabella contenente 
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
