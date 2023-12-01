// funzione che serve a pescare le parole
function pescaParola() {

    var continua = true;

    while (continua) {
        parolaRan = Math.floor(Math.random() * listaParole.length); // numero casuale per parola
        parolaRan = listaParole[parolaRan]; // prende numero casuale per la lista
        parolaRan = parolaRan.toUpperCase(); // mette tuttte le lettere in maiuscolo

        for (var i = 0; i < arrayParole.length; i++) {
            if (parolaRan == arrayParole[i]) {
                uguale = false;
            }
        }

        if (parolaRan.length > 2 && parolaRan.length < dimensione && uguale == false) {
            continua = false;

        }



    }
}

//---------------------------------------------------------------------------------------------------------------------------------------
// funzione per pescare la parola nascosta


async function parolaNascosta() {
    const wordsNascosta = await fetchWords("../parolaNascosta.txt");
    listaParoleNascosta = wordsNascosta;
    vuoti = 0;
    contaVuoti();
    var nascostePossibili = new Array();
   
    for (var i = 0; i < listaParoleNascosta.length; i++) {
       
        if (listaParoleNascosta[i].length == vuoti) {
         
            nascostePossibili.push(listaParoleNascosta[i]);
        }
    }

    if (nascostePossibili.length == 0) {
        var controllo = true
        while(controllo){
            var messaggio = prompt(`Inserisci una parola nascosta di ${vuoti} caratteri`);
           
            if(messaggio.length == vuoti){
                pNascosta = messaggio
                pNascosta = pNascosta.toUpperCase();
                controllo = false
            }
        }
    }else{
        pNascosta = nascostePossibili[Math.floor(Math.random() * nascostePossibili.length)];
        pNascosta = pNascosta.toUpperCase();
    }

}



