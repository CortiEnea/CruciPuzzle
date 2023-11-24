
function sceltaDimensione(){
  
    var scelta = document.getElementById('dimensione').value;
    if(scelta == "Piccola"){
        dimensione = 10;
    }else if(scelta == "Media"){
        dimensione = 15;
    }else{
        dimensione = 20;
    }
    array = new Array(dimensione);
    nParole = parseInt((dimensione * dimensione * 15) / 100);
    arrayControllo = new Array(dimensione);
    
}

async function sceltaDiffficolta(){
     dif = document.getElementById('difficolta').value;
    if(dif == "bambino"){
        riempiVuoti();
    }else{
        await nascosta();
    }
}
