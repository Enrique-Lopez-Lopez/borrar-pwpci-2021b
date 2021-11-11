//Importar el modulo http
import http from 'http';
/**
 * Codigos de Emojies
 * ref: https://www.w3schools.com/Chassets/ref_emoji.asp
 */

// 2.- crear un servidor 
// cb (callbak) es una *funcion que se ejecutara
//ante cualquier peticion de un resurso a nuestro server 
//(request, response)
const server = http.createServer((req, res)=>{
    //Obteniendo recursos solicitado
    let{url, method} =req;
    console.log(">Se ha recibido una peticion");

    //Informa en la consola del servidor que se recibe una peticion 
    console.log(`Se ha solicitado el siguiente recurso: ${method}: ${url}`);
    

    //Filtrar la url
    if(url === '/'){
        // Respuesta ante "Get"/*
        // 1.- Estableciendo el tipo de retorno
        // Como HTML
        res.setHeader('Content-Type', 'text/html');
         // 2.- Escribiendo la respuesta
        res.write(  `<html> `);
        res.write(`<head><title> My App </title></head>`);
        res.write(`<body><h1> &#9889;Hello from the server & 
            #9889;</h1></body>`);
        res.write(`</html>`);
        // Terminar la conexion
        res.end();
    }else{
        //Se registra el recurso no encontrado
        console.log(`No se ha encontrado el recurso:${url}`);
        //Recurso no encontrado 
        // 1.- Estableciendo el tipo  de retorno
        // como html
        res.setHeader('content-Type', 'text/html');
        // 2.- Escribiendo la respuesta 
        res.write('<html>');
        res.write('<head><title> My app</title></head>');
        res.write('<body><h1>Error: 404 - Recurso no encontrado &#9940;</h1></body>');
        //Cerrando conexion
        res.end();
    } 
});

// 3.-Pongo a trabajar el servidor
//Le paso un callback que escribira en la consola
// Cuando el servidor este escuchando  
//192.168.100.136
server.listen(3000, '192.168.100.136', () => {
    console.log("Servidor escuchandoen http://192.168.100.136:3000");
});

console.log('Hello node')