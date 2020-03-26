const http = require('http');

const server = http.createServer((request, response) => {
    console.log("Incoming request!");

    // Stampa delle informazioni di base
    console.log("URL: " + request.url);
    console.log("HTTP version: " + request.httpVersion);
    console.log("HTTP method/verb: " + request.method);

    // Enumeriamo gli header della richiesta
    for(var header in request.headers) {
        console.log(header + ": " + request.headers[header]);
    }

    const targetUrl = new URL('http://' + request.headers.host + request.url);
    console.log('URL completo: ' + targetUrl);

    // Aggiungiamo header alla risposta
    response.setHeader("My-Header", "Valore qualsiasi");
    response.setHeader("Content-Type", "text/html");

    // Scriviamo l'intestazione della risposta, con status #200
    response.writeHead(200);

    // Chiusura della risposta (sempre necessaria) e scrittura del corpo
    response.end("Hello World\n");

    // Vedere la documentazione ufficiale per ulteriori dettagli sulla
    // lettura dei dati dalla richiesta e sulla generazione della risposta.
    // https://nodejs.org/api/http.html
});

server.listen(8000);
console.log("Server in ascolto su http://127.0.0.1:8000/");
