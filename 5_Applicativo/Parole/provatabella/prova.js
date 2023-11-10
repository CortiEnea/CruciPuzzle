// Variabili locali 
var listaParole;
var parolaRan;
var x;
var y;
var dimensione = 20;
var a = new Array(dimensione);
var arrayParole = new Array();
var pos;
var pNascosta = "";
var nParole = parseInt((dimensione * dimensione * 15) / 100);
var direzione;
var vuoti;
var indiceNascosta;

var arrayControllo = new Array(dimensione);

// ------------------------------------------------------------------------------------------------------------------------

// funzione che serve per leggere il file che inserisce l'utente.

function readFile() {
    try {
        prendiFile();
    } catch {
        fileDefault();
    }

}

// ------------------------------------------------------------------------------------------------------------------------


function prendiFile() {
    var fileInput = document.getElementById('dizionario');
    var file = fileInput.files[0]; // Ottieni il primo file selezionato

    var reader = new FileReader();
    reader.onload = function (e) {

        var parole = e.target.result;

        listaParole = parole.split('\n');


        generaArray();

    };
    reader.readAsText(file);
}

//-----------------------------------------------------------------------------------------------------------------------------


function fileDefault() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        listaParole = this.responseText.split("\n");
        generaArray();
    }
    xhttp.open("GET", "dizionario.txt");
    xhttp.send();
}

//-------------------------------------------------------------------------------------------------------------------------------

// funzione per la stampa delle parole 

async function generaArray() {

    arrayParole = [];

    pulisci();


    var dir = ['v', 'or', 'ob', 'obSx'];

    for (var i = 0; i < a.length; i++) {
        a[i] = new Array(dimensione);
        arrayControllo[i] = new Array(dimensione);
    }

    for (pos = 0; pos < nParole;) {
        pescaParola();


        if (pos >= parseInt(nParole / 2)) {
            parolaRan = reverseString(parolaRan);
        }

        direzione = dir[Math.floor(Math.random() * 4)];


        cordinate();


        if (y >= 0 || x >= 0) {

            if (direzione == "v") {
                verticale();
            } else if (direzione == "or") {
                orizzontale();
            } else if (direzione == "ob") {
                obliquoDx();
            } else if (direzione == "obSx") {
                obliquoSx();
            }
        }
    }

    await nascosta();
    //riempiVuoti();
    print();
    console.log(arrayParole.length);
    console.log(nParole);
    stampa();



}

//-----------------------------------------------------------------------------------------------------------------------------------------

// funzione che pesca una parola a caso e la mette tutta in maiuscolo

function pescaParola() {

    var ciobanu = true;
    while (ciobanu) {
        parolaRan = Math.floor(Math.random() * 270000); // numero casuale per parola
        parolaRan = listaParole[parolaRan]; // prende numero casuale per la lista
        parolaRan = parolaRan.toUpperCase(); // mette tuttte le lettere in maiuscolo
        //listaParole.splice(parolaRan,1);
        if(parolaRan.length > 2 && parolaRan.length < dimensione ){
            
            ciobanu = false;
        }
    }




}

//--------------------------------------------------------------------------------------------------------------------------------------
function cordinate() {
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
    } else if (direzione == "obSx") {
        y = Math.floor(Math.random() * (dimensione - parolaRan.length));
        x = Math.floor(Math.random() * (dimensione - parolaRan.length) + parolaRan.length);

    }
}

//---------------------------------------------------------------------------------------------------------------------------------


// funzione che serve per rimuovere le parole precedenti in caso si voglia rigenerare

function pulisci() {


    document.getElementById('si').innerHTML = "";

    document.getElementById('output').innerHTML = "";
    document.getElementById('output2').innerHTML = "";
    document.getElementById('output3').innerHTML = "";
    document.getElementById('output4').innerHTML = "";
    document.getElementById('output5').innerHTML = "";

}


//----------------------------------------------------------------------------------------------------------------------------------


// funzione di stampa obliqua

function verticale() {
    if (controllaVerticale(parolaRan, y, x)) {

        for (var i = 0; i < parolaRan.length; i++) {
            console.log(`parola ${parolaRan}, riga ${y}, col ${x}, len ${parolaRan.length}, verticale`);
            a[y][x] = parolaRan[i];
            arrayControllo[y][x] = parolaRan[i];
            y++;

        }


        //stampa(parolaRan);
        arrayParole.push(parolaRan);
        pos++;


    }
}

//------------------------------------------------------------------------------------------------------------------------
// funzione di stampa obliqua

function orizzontale() {
    if (controllaOrizzontale(parolaRan, y, x)) {

        for (var i = 0; i < parolaRan.length; i++) {
            console.log(`parola ${parolaRan}, riga ${y}, col ${x}, len ${parolaRan.length}, orizzontale`);
            a[y][x] = parolaRan[i];
            arrayControllo[y][x] = parolaRan[i];
            x++;

        }
       //stampa(parolaRan);
       arrayParole.push(parolaRan);

        pos++;

    }
}

//----------------------------------------------------------------------------------------------------------------------

// funzione di stampa obliqua

function obliquoDx() {

    if (controllaObliquo(parolaRan, y, x)) {
        for (var i = 0; i < parolaRan.length; i++) {

            console.log(`parola ${parolaRan}, riga ${y}, col ${x}, len ${parolaRan.length}, obliquoDx`);
            a[y][x] = parolaRan[i];
            arrayControllo[y][x] = parolaRan[i];
            y++;
            x++;

        }
        //stampa(parolaRan);
        arrayParole.push(parolaRan);

        pos++;

    }
}

//-------------------------------------------------------------------------------------------------------------------------
// funzione di stampa obliqua sinistra 


function obliquoSx() {

    if (controllaObliquoSx(parolaRan, y, x)) {
        for (var i = 0; i < parolaRan.length; i++) {
            
            a[y][x] = parolaRan[i];
            console.log(`parola ${parolaRan}, riga ${y}, col ${x}, len ${parolaRan.length}, obliquoSx`);
            arrayControllo[y][x] = parolaRan[i];
            y++;
            x--;

        }
      //stampa(parolaRan);
      arrayParole.push(parolaRan);

        pos++;
    }
}

//-------------------------------------------------------------------------------------------------------------------------
// funzione di stampa parola nascosta 


async function nascosta() {
    indiceNascosta = 0;
    vuoti = 0;
    contaVuoti();

    while (true) {

        if (pNascosta.length != vuoti) {

            await parolaNascosta();

        } else {

            for (var i = 0; i < dimensione; i++) {
                for (var j = 0; j < dimensione; j++) {

                    if (a[i][j] == null) {

                        a[i][j] = pNascosta[indiceNascosta];
                        console.log(`parola ${pNascosta}, riga ${i}, col ${j}, len ${pNascosta.length}, Parola Nascosta`);
                        indiceNascosta++;
                    }
                }
            }

            break;
        }
    }

}


//-------------------------------------------------------------------------------------------------------------------------


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

//-------------------------------------------------------------------------------------------------------------------------

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

//-------------------------------------------------------------------------------------------------------------------------

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

    try {

        for (var i = 0; i < parola.length; i++) {
            if ((a[Y][X] == parola[i] || a[Y][X] == null) && (X >= 0) && (Y <= dimensione)) {
                Y++;
                X--;

            } else {
                return false;
            }
        }

        return true;


    } catch {
        return false;
    }
}



//-------------------------------------------------------------------------------------------------------------------------

// funzione per girare una parola

function reverseString(str) {
    return str.split("").reverse().join("");
}


//--------------------------------------------------------------------------------------------------------------------------

function contaVuoti() {

    for (var i = 0; i < dimensione; i++) {
        for (var j = 0; j < dimensione; j++) {

            if (a[i][j] == undefined) {
                vuoti++;
            }
        }
    }
}



//--------------------------------------------------------------------------------------------------------------------------
function riempiVuoti() {
    var alfabeto = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    for (var i = 0; i < dimensione; i++) {
        for (var j = 0; j < dimensione; j++) {
            if (a[i][j] == undefined) {
                a[i][j] = alfabeto[Math.floor(Math.random() * 26)].toUpperCase();
                
            }
        }
    }


}


//-------------------------------------------------------------------------------------------------------------------------

function stampa(){

    for(var i = 0; i < arrayParole.length; i++){

        if (i >= parseInt(nParole / 2)) {
            arrayParole[i] = reverseString(arrayParole[i]);
        }
    }
    arrayParole.sort()
    for(var i = 0; i < arrayParole.length; i++){
       
        if (i < 8) {
    
            document.getElementById('output').innerHTML += arrayParole[i] + "<br>";
    
        } else if (i >= 8 && i < 16) {
    
            document.getElementById('output2').innerHTML += arrayParole[i] + "<br>";
    
    
        } else if (i >= 16 && i < 24) {
    
            document.getElementById('output3').innerHTML += arrayParole[i] + "<br>";
        } else if (i >= 24 && i < 32) {
    
            document.getElementById('output4').innerHTML += arrayParole[i] + "<br>";
        } else if (i >= 32 && i < 40) {
    
            document.getElementById('output5').innerHTML += arrayParole[i] + "<br>";
        }
    }

    
}
//-------------------------------------------------------------------------------------------------------------------------
// tabella contenente 
function print() {
    var table = "<table>";

    for (var i = 0; i < dimensione; i++) {
        table += "<tr>";
        for (var j = 0; j < dimensione; j++) {


            if(arrayControllo[i][j] == null){
                table += "<td style='background-color: red;'>" + a[i][j] + "</td>";
            }else{
                table += "<td>" + a[i][j] + "</td>";
            }


        }
        table += "</tr>";
    }

    table += "</table>";

    document.getElementById('si').innerHTML = table;
}



function parolaNascosta() {
    return new Promise((resolve, reject) => {
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function () {
            pNascosta = this.responseText.split("\n");
            pNascosta = pNascosta[Math.floor(Math.random() * 98)];

            pNascosta = pNascosta.toUpperCase();
            resolve();
        }
        xhttp.open("GET", "parolaNascosta.txt");
        xhttp.send();
    })
}


// controllo che la parola non sia già presente all'interno dell'array e quindi che non ci siano doppioni
