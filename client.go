package main

import (
    "fmt"
    "io/ioutil"
    "net/http"
)

func main() {
    // Metodo più semplice per fare una richiesta GET
    resp, err := http.Get("http://localhost:8000");
    if err != nil {
        print(err);
        return;
    }

    // Deallochiamo il corpo della risposta quando termina la funzione
    defer resp.Body.Close();

    // Leggiamo tutta la sequenza di byte nella variabile body
    body, err := ioutil.ReadAll(resp.Body);
    if err != nil {
        print(err);
        return;
    }

    // Stampa il corpo della risposta come stringa
    fmt.Print(string(body));

    // Vedere la documentazione per una descrizione più dettagliata
    // di come creare richieste HTTP in Go, in particolare come
    // aggiungere header alla richiesta.
    // https://golang.org/pkg/net/http/
}
