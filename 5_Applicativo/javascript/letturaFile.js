// funzione che serve per leggere il file che inserisce l'utente.
async function fetchWords(url) {
    try {
        const response = await fetch(url);

        // Controlla se il tipo di contenuto è "text/plain"
        if (!response.headers.get('content-type').includes('text/plain')) {
            alert("Il file non è di tipo TXT.");
            return [];
        }

        if (response.ok) {
            const words = await response.text();
            return words.split('\n');
        } else {
            console.error("Errore nella risposta HTTP:", response.status);
        }
    } catch (error) {
        console.error("Errore nel recupero delle parole:", error);
    }
    return [];
}


// Utilizzo di funzioni asincrone per la gestione dei file
async function readFile() {
    const fileInput = document.getElementById('dizionario');
    const file = fileInput.files[0];
    if (file) {
        const words = await fetchWords(URL.createObjectURL(file));
        if (words.length === 0) {
            await fileDefault();
        } else {
            listaParole = words;
            generaArray();
        }
    } else {
        await fileDefault();
    }
}

async function fileDefault() {
    const words = await fetchWords("dizionario.txt");
    listaParole = words;
    
    generaArray();
}
