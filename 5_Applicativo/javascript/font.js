// la funzione serve per cambiare il font della tabella 
function changeFont() {
    document.getElementById("outputs").style.fontFamily = document.getElementById("input-font").value;
    document.getElementById("tabella").style.fontFamily = document.getElementById("input-font").value;
  
}

function font() {
    document.getElementById('font').innerHTML = "";
    var result = ' <select id="input-font" class="input"  onchange="changeFont();">'
    result += `<option value="${arrayFonts[0]}" selected ="selected">${arrayFonts[0]}</option>`
    for (var i = 1; i < arrayFonts.length; i++) {
        result += `<option value="${arrayFonts[i]}">${arrayFonts[i]}</option>`
    }
    result += '</select>';
    document.getElementById('font').innerHTML = result;

}


var arrayFonts = [
    "Monospace",
    "Arial",
    "Verdana",
  "Helvetica",
  "Times New Roman",
  "Georgia",
  "Courier New",
  "Brush Script MT",
  "Comic Sans MS",
  "Impact",
  "Lucida Console",
  "Tahoma",
  "Garamond",
  "Californian FB",
  "Copperplate Gothic",
  "Franklin Gothic Medium",
  "Trebuchet MS",
  "Bodoni MT",
  "Century Gothic",
  "Candara",
  "Futura",
  "Rockwell",
  "Palatino Linotype",
  "Optima",
  "Gill Sans",
  "Arial Black",
  "Book Antiqua",
  "Consolas",
  "Monaco",
  "Lucida Sans Unicode",
  "Perpetua",
  "Cambria",
  "Baskerville Old Face",
  "Goudy Old Style",
  "Century Schoolbook",
  "Bookman Old Style",
  "Batang",
  "MingLiU",
  "MS Mincho",
  "SimSun",
  "Footlight MT Light",
  "High Tower Text",
  "Lucida Bright",
  "Brush Script Std",
  "Segoe Script",
  "Lucida Handwriting",
  "Papyrus",
  "Vivaldi",
  "Chiller",
  "Old English Text MT",
  "Blackadder ITC"
];

  

