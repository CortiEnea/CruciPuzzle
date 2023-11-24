function stampaSoluzione() {

    document.getElementById('sol').innerHTML = "Soluzione:";
    var soluzione = "<table>";
    

    for (var i = 0; i < dimensione; i++) {
        
        soluzione += "<tr>"

        for (var j = 0; j < dimensione; j++) {
                colore = coloriCelle[i][j]; 
                soluzione += `<td style='background-color: ${colore};'>` +  array[i][j] + "</td>";      

        }
        soluzione += "</tr>";
    }

    soluzione += "</table>";

    document.getElementById('soluzione').innerHTML = soluzione;
    
    if(dif == "adulto"){

        document.getElementById('soluzioneNascosta').innerHTML = "Parola nascosta: " +  pNascosta;
    }

    
}