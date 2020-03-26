# Esercitazione interfacce Web

Codice per l’esercitazione di interfacce Web (client e server).

## Requisiti

Il server viene sviluppato in Javascript utilizzando *NodeJS*, mentre il client viene sviluppato in linguaggio Go.

Per Windows si consiglia di scaricare i relativi *installer* dai siti Web relativi:
* [NodeJS](https://nodejs.org/en/)
* [Go](https://golang.org/)

Su Ubuntu/Debian e/o sotto *Windows Subsystem for Linux* è possibile installare i due pacchetti con i comandi:
* `sudo apt get install nodejs`
* `sudo apt get install golang`

## Svolgimento

### Server

Prendere in esame il codice di `server.js`, che crea un server HTTP in ascolto sulla porta *8000*.
Una funzione anonima (avente come parametri la richiesta e la risposta) viene invocata ad ogni richiesta ricevuta dal server.

Avviare il server con il comando:
```
nodejs server.js
```

Una descrizione più approfondita delle funzioni del modulo `http` utilizzato è disponibile nella [documentazione ufficiale](https://nodejs.org/api/http.html).

### Client

Prendere in esame il codice di `client.go`, che invia una richiesta HTTP utilizzando il modulo `net/http` di Go.

Avviare il programma con il comando:
```
go run client.go
```

Vedere la [documentazione ufficiale](https://golang.org/pkg/net/http/) per i dettagli sull’utilizzo del modulo `net/http`.
