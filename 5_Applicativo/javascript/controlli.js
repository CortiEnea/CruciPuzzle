// controllo che sia possibile stampare in verticale

function controllaVerticale(parola, X, Y) {
    try {
        for (var i = 0; i < parola.length; i++) {
            if (array[X][Y] == parola[i] || array[X][Y] == null) {
                
                Y++;

            } else {

                return false;
            }
        }

        return true;

    } catch {

        return false;
    }
}
//-------------------------------------------------------------------------------------------------------------------------

// controllo che sia possibile stampare in orizzontale

function controllaOrizzontale(parola, X, Y) {


    for (var i = 0; i < parola.length; i++) {
        if (array[X][Y] == parola[i] || array[X][Y] == null) {
            X++;

        } else {
            return false;
        }
    }

    return true;


}

//-------------------------------------------------------------------------------------------------------------------------

// controllo che sia possibile stampare in obliquo

function controllaObliquo(parola, X, Y) {


    for (var i = 0; i < parola.length; i++) {
        if (array[X][Y] == parola[i] || array[X][Y] == null) {
            Y++;
            X++;

        } else {
            return false;
        }
    }

    return true;

}

//--------------------------------------------------------------------------------------------------------------------------------------

function controllaObliquoSx(parola, X, Y) {

    try {

        for (var i = 0; i < parola.length; i++) {
            if ((array[X][Y] == parola[i] || array[X][Y] == null) && (X >= 0) && (Y <= dimensione)) {
                Y++;
                X--;

            } else {
                return false;
            }
        }

        return true;


    } catch {
        return false;
    }
}
