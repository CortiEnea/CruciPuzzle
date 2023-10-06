
        
        for (var col = 0; col < 3; col++) {
    
            var parolaRan = Math.floor(Math.random() * 1000);
            parolaRan = listaParole[parolaRan];
            parolaRan = parolaRan.toUpperCase();
            var x = Math.floor(Math.random() * (11 - parolaRan.length));
            var y = Math.floor(Math.random() * (11 - parolaRan.length));
    
            for (var pos = 0; pos < parolaRan.length; pos++) {
                console.log(`parola ${parolaRan}, col ${col}, len ${parolaRan.length}`);
    
    
                
                a[x][y] = parolaRan[pos];
                x++;
    
    
            }
    
        }




        var alfabeto = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];




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














   
   