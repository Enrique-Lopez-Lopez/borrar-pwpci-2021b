//Importar el modulo http
import http from 'http';
import fs from "fs";
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
    //console.log(">Se ha recibido una peticion");

    //Informa en la consola del servidor que se recibe una peticion 
    console.log(`Se ha solicitado el siguiente recurso: ${method}: ${url}`);
    

    //Filtrar la url
    if(url === '/'){
        // Respuesta ante "Get"/*
        // 1.- Estableciendo el tipo de retorno
        // Como HTML
        res.setHeader('Content-Type', 'text/html');
         // 2.- Escribiendo la respuesta
        res.write(  `
        <html>
            <head>
                <title> Enter mesage </title>
            </head>
            <body>
                <h1> Send Message</h1>
                <form action="/message" method = "POST">
                    <input type ="text" name = "message">
                    <button type = "submit">send</button>
                </form>
            </body>);
        </html>`
        );
        // Terminar la conexion
        res.end();
        
    }else if(url === 'message' && method === "POST"){
        // 1.- Se crea una variable para guardar los datos de entrada
        let body = [];
        //2.- Registrar un manejador para la entrada de los datos
        req.on("data", (chuck)=>{
           //2.1 Registrando los trozos qu llegan al backend
           console.log(chuck);
           //2.2 Acumulo los datos de entrada
           body.push(chuck);
           // 2.3 Proteccion en caso de recepcion masiva de datos
           if (body.length > 1e6) req.socket.destroy();
        });
        //Registrando un manejador de fin de recepcion de datos
        req.on('end',()=>{
            const parasedBody =Buffer.concat(body).toString();
            const message = parasedBody.split('=')[1];
            res.write(`
            <html>
                <head>
                    <title>Received Message</title>
                </head>
                <body>
                    <h1> Received Message</h1>
                    <p> Thank you!!!</p>
                    <p> The message we recieved was this: ${message}</p>
                </body>);
            </html>`);
            //Finalizo conexion
            return res.end();
        });

    // Terminarl el procesamiento del formulario
    }else if(url === 'author'){
        // Respuesta ante "Get"/*
        // 1.- Estableciendo el tipo de retorno
        // Como HTML
        res.setHeader('Content-Type', 'text/html');
        let url_imagen = 'https://www.nike.com/mx/launch/t/air-jordan-4-tech-white'
         // 2.- Escribiendo la respuesta
        res.write(  `<html> `);
        res.write(`<head><title> My App </title></head>`);
        res.write(`<body><h1> &#9889;Hello from the server & #9889;</h1></body>`);
        res.write(`<h1> &#9889;Author;</h1>`);
        res.write(`<p> Lopez Lopez Jose Enrique - Web developer</p>`);
        res.write(`<img src="${url_imagen}"alt=Foto Lopez Lopez Jose Enrique">`);
        res.write(`</body>`);
        res.write(`</html>`);
        // Terminar la conexion
        res.end();


    }
    else{
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
server.listen(3000, '0.0.0.0', () => {
    console.log("Servidor escuchandoen http://0.0.0.0:3000");
});

console.log('Hello node')