var listaParole;


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

// ------------------------------------------------------------------------------------------------------------------------

// vecchia funzione che stampava una table, non più utilizzato

/*
function griglia() {


  var table = "<table id='table'>";
  for (var i = 0; i < 25; i++) {
    table += "<tr>";
    for (var j = 0; j < 25; j++) {
      table += "<td> </td>";
    }
    table += "</tr>";
  }
  table += "</table>";




}
*/

// ------------------------------------------------------------------------------------------------------------------------

// funzione usata per girare la parola passata
function giraParola() {

  for (var i = 0; i < 20; i++) {

    var ran = Math.floor(Math.random() * 50);

    listaParole[ran] = reverseString(listaParole[ran]);
  }

}


function reverseString(str) {
  return str.split("").reverse().join("");
}


// ------------------------------------------------------------------------------------------------------------------------

// funzione che serve a inserire le parole nella table


function generaArray() {
  var a = new Array(25);

  for (var s = 0; s < a.length; s++) {
    a[s] = new Array(25);
  }

  for (var col = 0; col < 10; col++) {
    
    var parolaRan = Math.floor(Math.random() * 1000);
    parolaRan = listaParole[parolaRan];
    parolaRan = parolaRan.toUpperCase();
    var x = Math.floor(Math.random() * (25 - parolaRan.length));
    var y = Math.floor(Math.random() * (25 - parolaRan.length));

    for (var riga = 0; riga < parolaRan.length; riga++) {
      console.log(`parola ${parolaRan}, riga ${riga}, col ${col}, len ${parolaRan.length}`);

      a[x][y] = parolaRan[riga];
      y++;
    }

  }
  var table = "<table>";

  for (var col = 0; col < a.length; col++) {
    table += "<tr>";
    for (var riga = 0; riga < a[col].length; riga++) {
      if (a[col][riga] == undefined) {
        table += "<td>-</td>";
      } else {
        table += "<td>" + a[col][riga] + "</td>";
      }

    }
    table += "</tr>";
  }
  table += "</table>";
  document.getElementById('si').innerHTML = table;

}


