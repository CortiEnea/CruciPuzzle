var prova;

function readFile() {
  var fileInput = document.getElementById('dizionario');
  var file = fileInput.files[0]; // Ottieni il primo file selezionato
  var reader = new FileReader();
  reader.onload = function (e) {
    var parole = e.target.result;

    prova = parole.split('\n');

    console.log(prova);
    //giraParola();
    stampa();

  

  };

  reader.readAsText(file);

}


function stampa() {



for(var i = 0; i < prova.length; i++){

  if(i < 9){

    document.getElementById('output').innerHTML += prova[i] + "<br>";

  }
  

  if(i >= 10 && i < 19){

    document.getElementById('output2').innerHTML += prova[i] + "<br>";


 }else if(i >= 20 && i < 29){

    document.getElementById('output3').innerHTML += prova[i] + "<br>";
  }else if(i >= 30 && i < 39){

    document.getElementById('output4').innerHTML += prova[i] + "<br>";
  }else if(i >= 40 && i < 49){

    document.getElementById('output5').innerHTML += prova[i] + "<br>";
  }


  

  griglia();
}


}



function griglia(){
  var table = "<table>";
    for(var i = 0; i < 25; i++){
        table += "<tr>";
        for(var j = 0; j < 25; j++){
            table += "<td> </td>";
        }
        table += "</tr>";
    }
    table += "</table>";
    document.getElementById('si').innerHTML = table;


}



function giraParola(){

  for(var i = 0; i < 20;i++){
    
    var ran =   Math.floor(Math.random() * 50);
    console.log(ran);
    prova[ran] = reverseString(prova[ran]);
  }


}


function reverseString(str) {
  return str.split("").reverse().join("");
}


function riempi(){
  
}


