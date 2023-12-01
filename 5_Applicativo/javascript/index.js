// funzione per la stampa delle parole 



async function generaArray() {
    // Funzione per generare un colore casuale



    sceltaDimensione(); // richiamo la funzione che 

    arrayParole = [];
    pulisci();
    var dir = ['v', 'or', 'ob', 'obSx'];

    
    for (var i = 0; i < array.length; i++) {
        array[i] = new Array(dimensione);
        coloriCelle = new Array(dimensione);
        arrayControllo[i] = new Array(dimensione);
    }

    
    coloriCelle = new Array(array.length);
    for(let i = 0; i < array.length; i++){
        coloriCelle[i] = new Array(array.length);
    }
    console.log(coloriCelle);
    

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
    await sceltaDiffficolta();
    print();
    stampa();

    mostraElementi();
  
    return;

}

//-----------------------------------------------------------------------------------------------------------------------------------------

// funzione che pesca una parola a caso e la mette tutta in maiuscolo

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
    document.getElementById('tabella').innerHTML = "";
    document.getElementById('soluzione').innerHTML = "";
    document.getElementById('soluzioneNascosta').innerHTML = "";
    document.getElementById('sol').innerHTML = "";
    document.getElementById('output').innerHTML = "";
    document.getElementById('output2').innerHTML = "";
    document.getElementById('output3').innerHTML = "";
    document.getElementById('output4').innerHTML = "";
    document.getElementById('output5').innerHTML = "";  
    document.getElementById('output').style.display = "none";
    document.getElementById('output2').style.display = "none";
    document.getElementById('output3').style.display = "none";
    document.getElementById('output4').style.display = "none";
    document.getElementById('output5').style.display = "none";}


//----------------------------------------------------------------------------------------------------------------------------------


// funzione di stampa verticale

function verticale() {
    
    if (controllaVerticale(parolaRan, x, y)) {
      
        let colore = randomRGBColor();
        for (var i = 0; i < parolaRan.length; i++) {
            console.log(`parola ${parolaRan}, riga ${x}, col ${y}, len ${parolaRan.length}, verticale`);
            array[x][y] = parolaRan[i];
            coloriCelle[x][y] = colore;
            arrayControllo[x][y] = parolaRan[i];
            y++;
        }
        arrayParole.push(parolaRan);
        pos++;
    }

}

//------------------------------------------------------------------------------------------------------------------------
// funzione di stampa orizzontale

function orizzontale() {
    if (controllaOrizzontale(parolaRan, x, y)) {
        let colore = randomRGBColor();
        for (var i = 0; i < parolaRan.length; i++) {
            console.log(`parola ${parolaRan}, riga ${y}, col ${x}, len ${parolaRan.length}, orizzontale`);
            array[x][y] = parolaRan[i];
            arrayControllo[x][y] = parolaRan[i];
            coloriCelle[x][y] = colore;
            x++;

        }
        arrayParole.push(parolaRan);
        pos++;

    }
}

//----------------------------------------------------------------------------------------------------------------------

// funzione di stampa obliqua verso destra

function obliquoDx() {

    if (controllaObliquo(parolaRan, x, y)) {

        let colore = randomRGBColor();
        for (var i = 0; i < parolaRan.length; i++) {
            console.log(`parola ${parolaRan}, riga ${y}, col ${x}, len ${parolaRan.length}, obliquoDx`);
            array[x][y] = parolaRan[i];
            coloriCelle[x][y] = colore;
            arrayControllo[x][y] = parolaRan[i];
            y++;
            x++;
        }
        arrayParole.push(parolaRan);

        pos++;

    }
}

//-------------------------------------------------------------------------------------------------------------------------
// funzione di stampa obliqua sinistra 


function obliquoSx() {

    if (controllaObliquoSx(parolaRan, x, y)) {
        let colore = randomRGBColor();
        for (var i = 0; i < parolaRan.length; i++) {
            array[x][y] = parolaRan[i];
            arrayControllo[x][y] = parolaRan[i];
            coloriCelle[x][y] = colore;

            console.log(`parola ${parolaRan}, riga ${y}, col ${x}, len ${parolaRan.length}, obliquoSx`);


            y++;
            x--;

        }
        arrayParole.push(parolaRan);

        pos++;
    }
}

//-------------------------------------------------------------------------------------------------------------------------
// funzione di stampa parola nascosta 


async function nascosta() {
    indiceNascosta = 0;
    await parolaNascosta();
    for (var i = 0; i < dimensione; i++) {
        for (var j = 0; j < dimensione; j++) {

            if (array[i][j] == undefined) {
                
                array[i][j] = pNascosta[indiceNascosta];
                
                console.log(`parola ${pNascosta}, riga ${i}, col ${j}, len ${pNascosta.length}, Parola Nascosta`);
                indiceNascosta++;
            }
        }
    }

    document.getElementById('nascosta').innerHTML = "Parola nascosta: " +  "_ ".repeat(pNascosta.length);
   


}

// funzione per girare una parola

function reverseString(str) {
    return str.split("").reverse().join("");
}


//--------------------------------------------------------------------------------------------------------------------------

function contaVuoti() {

    for (var i = 0; i < dimensione; i++) {
        for (var j = 0; j < dimensione; j++) {
            
      
            if (arrayControllo[i][j] == undefined) {
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
            if (array[i][j] == undefined) {
                array[i][j] = alfabeto[Math.floor(Math.random() * 26)].toUpperCase();

            }
        }
    }

    


}



//------------------------------------------------------------------------------------------------------------------------



function mostraElementi(){
    var elements = document.getElementsByClassName('invisible');

    for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = "block";
    }
}


//-------------------------------------------------------------------------------------------------------------------------


function downloadText() {
    var element = document.querySelector('.download');
    
    var blob = new Blob([element.innerText], {type: 'text/plain'});
    
    var url = window.URL.createObjectURL(blob);
    var downloadLink = document.createElement('a');
    downloadLink.href = url;
    downloadLink.download = 'parte_pagina.txt';

    document.body.appendChild(downloadLink);
    downloadLink.click();
    
    document.body.removeChild(downloadLink);
  }


  function downloadHTML() {
    var element = document.querySelector('.download');
    
    // Utilizziamo outerHTML per ottenere l'intero elemento con il tag
    var blob = new Blob([element.outerHTML], { type: 'text/html' });
    
    var url = window.URL.createObjectURL(blob);
    var downloadLink = document.createElement('a');
    downloadLink.href = url;
    downloadLink.download = 'parte_pagina.html';

    document.body.appendChild(downloadLink);
    downloadLink.click();
    
    document.body.removeChild(downloadLink);
}