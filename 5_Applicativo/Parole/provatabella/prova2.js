var listaParole;
var err;
var parolaRan;
var x;
var y;
var dimensione = 15;
var a = new Array(dimensione);
var pos;


// funzione che serve per leggere il file che inserisce l'utente.

function readFile() {
    var fileInput = document.getElementById('dizionario');
    var file = fileInput.files[0]; // Ottieni il primo file selezionato
    var reader = new FileReader();
    reader.onload = function (e) {
        var parole = e.target.result;

        listaParole = parole.split('\n');
        //giraParola();

       
        generaArray();
    };

    reader.readAsText(file);

}
// ------------------------------------------------------------------------------------------------------------------------


// funzione per la stampa delle parole 

function generaArray() {
   
    var dir = ['v', 'or', 'ob', 'obSx'];

    for (var i = 0; i < a.length; i++) {
        a[i] = new Array(dimensione);
    }

    for (pos = 0; pos < 40;) {
        pescaParola();
        
        if (pos >= 20) {
            parolaRan = reverseString(parolaRan);
        }

        var direzione = dir[Math.floor(Math.random() * 3)];

        // in base alla direzione faccio i random per le cordinate


        if (direzione == "v") {
            y = Math.floor(Math.random() * (dimensione - parolaRan.length));
            x = Math.floor(Math.random() * (dimensione));
        } else if (direzione == "ob") {
            y = Math.floor(Math.random() * (dimensione - parolaRan.length));
            x = Math.floor(Math.random() * (dimensione - parolaRan.length));
        } else if (direzione == "or") {
            y = Math.floor(Math.random() * (dimensione));
            x = Math.floor(Math.random() * (dimensione - parolaRan.length));
        } else if(direzione == "obSx"){
            y = Math.floor(Math.random() * (dimensione));
            x = Math.floor(Math.random() * (dimensione - parolaRan.length)+ parolaRan.length);
        }


        if (y >= 0 || x >= 0) {

            if (direzione == "v") {

                verticale();
                



                


            } else if (direzione == "or") {

                orizzontale();
                
                

            } else if (direzione == "ob") {

              obliquoDx();
             

            }
        }
        
        

    }
    riempiVuoti();
    print();
}


    //-----------------------------------------------------------------------------------------------------------------------------------------

    // funzione che pesca una parola a caso e la mette tutta in maiuscolo

    function pescaParola(){
        parolaRan = Math.floor(Math.random() * 1000); // numero casuale per parola
        parolaRan = listaParole[parolaRan]; // prende numero casuale per la lista
        parolaRan = parolaRan.toUpperCase(); // mette tuttte le lettere in maiuscolo
    }
    

    //---------------------------------------------------------------------------------------------------------------------------------


    // funzione di stampa obliqua

    function verticale() {
        if (controllaVerticale(parolaRan, y, x)) {

            for (var i = 0; i < parolaRan.length; i++) {
                console.log(`parola ${parolaRan}, riga ${y}, col ${x}, len ${parolaRan.length}, verticale`);
                a[y][x] = parolaRan[i];

                y++;

            }
            stampa(parolaRan);
            pos++;

        }
    }

    // funzione di stampa obliqua

    function orizzontale() {
        if (controllaOrizzontale(parolaRan, y, x)) {

            for (var i = 0; i < parolaRan.length; i++) {
                console.log(`parola ${parolaRan}, riga ${y}, col ${x}, len ${parolaRan.length}, orizzontale`);
                a[y][x] = parolaRan[i];

                x++;

            }
            stampa(parolaRan);
            pos++;

        }
    }

    // funzione di stampa obliqua

    function obliquoDx() {

        if (controllaObliquo(parolaRan, y, x)) {
            for (var i = 0; i < parolaRan.length; i++) {
             
                console.log(`parola ${parolaRan}, riga ${y}, col ${x}, len ${parolaRan.length}, obliquo`);
                a[y][x] = parolaRan[i];
                y++;
                x++;

            }
            stampa(parolaRan);

            pos++;
            
        }
    }

    // funzione di stampa obliqua sinistra 

    /*
    function obliquoSx() {

        if (controllaObliquoSx(parolaRan, y, x)) {
            for (var i = 0; i < parolaRan.length; i++) {
                console.log(`parola ${parolaRan}, riga ${y}, col ${x}, len ${parolaRan.length}, obliquoSx`);
                a[y][x] = parolaRan[i];
                y++;
                x--;

            }
            pos++;
        }
    }
    */

    



    // controllo che sia possibile stampare in verticale

    function controllaVerticale(parola, Y, X) {
        try {
            if (Y >= 0 || X >= 0) {
                for (var i = 0; i < parola.length; i++) {
                    if (a[Y][X] == parola[i] || a[Y][X] == null) {
                        Y++;

                    } else {
                        return false;
                    }
                }
                return true;
               
            } else {
                return false;
            }
           
        } catch {
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
        } else {
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
        } else {
            return false;
        }
    }

    //--------------------------------------------------------------------------------------------------------------------------------------


    function controllaObliquoSx(parola, X, Y) {

        if (X >= 0 || Y >= 0) {
            for (var i = 0; i < parola.length; i++) {
                if (a[X][Y] == parola[i] || a[X][Y] == null) {
                    Y++;
                    X--;

                } else {
                    return false;
                }
            }
            return true;
        } else {
            return false;
        }
    }












    // funzione per girare una parola



    function reverseString(str) {
        return str.split("").reverse().join("");
    }


    //--------------------------------------------------------------------------------------------------------------------------

    function riempiVuoti(){
        var alfabeto = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        
        for(var i = 0; i < dimensione; i++){
            for(var j = 0; j < dimensione; j++){

                if(a[i][j] == undefined){
                    a[i][j] = alfabeto[Math.floor(Math.random() * 26)];
                }
            }
        }
    }


    function stampa(p) {

      
        if (pos < 9) {
            
            document.getElementById('output').innerHTML += p + "<br>";

        }else if (pos >= 9 && pos < 17) {

            document.getElementById('output2').innerHTML += parolaRan + "<br>";


        } else if (pos >= 17 && pos < 25) {

            document.getElementById('output3').innerHTML += parolaRan + "<br>";
        } else if (pos >= 25 && pos < 33) {

            document.getElementById('output4').innerHTML += parolaRan + "<br>";
        } else if (pos >= 33 && pos < 41) {

            document.getElementById('output5').innerHTML += parolaRan + "<br>";
        }
        
        
           
    
    
        
    }
    





    // tabella contenente 
    function print(){
        var table = "<table>";

    for (var i = 0; i < dimensione; i++) {
        table += "<tr>";
        for (var j = 0; j < dimensione; j++) {

          
                table += "<td>" + a[i][j] + "</td>";
            

        }

        table += "</tr>";
    }

    table += "</table>";

    document.getElementById('si').innerHTML = table;
    }



   


