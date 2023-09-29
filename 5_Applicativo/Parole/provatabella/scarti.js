
        
        for (var col = 0; col < 3; col++) {
    
            var parolaRan = Math.floor(Math.random() * 1000);
            parolaRan = listaParole[parolaRan];
            parolaRan = parolaRan.toUpperCase();
            var x = Math.floor(Math.random() * (11 - parolaRan.length));
            var y = Math.floor(Math.random() * (11 - parolaRan.length));
    
            for (var riga = 0; riga < parolaRan.length; riga++) {
                console.log(`parola ${parolaRan}, col ${col}, len ${parolaRan.length}`);
    
    
                
                a[x][y] = parolaRan[riga];
                x++;
    
    
            }
    
        }




   
   