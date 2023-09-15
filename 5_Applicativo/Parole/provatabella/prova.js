function riempiTabella(array) {
  // Ottenere il riferimento alla tabella
  var tabella = document.getElementById("sus");
  
  // Creare le righe della tabella
  for (var i = 0; i < array.length; i++) {
    var riga = document.createElement("tr");
    
    // Creare le celle della riga
    for (var j = 0; j < array[i].length; j++) {
      var cella = document.createElement("td");
      var testo = document.createTextNode(array[i][j]);
      cella.appendChild(testo);
      riga.appendChild(cella);
    }
    
    // Aggiungere la riga alla tabella
    tabella.appendChild(riga);
  }
}

// Esempio di utilizzo della funzione
var parole = [["casa", "albero", "sole"], ["mare", "montagna", "lago"]];


function si(){
    riempiTabella(parole);
}