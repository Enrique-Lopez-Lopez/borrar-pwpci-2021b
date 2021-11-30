//Importar el modulo http
import http from 'http';
import {requestHandler} from ".\routes.js";
/**
 * Codigos de Emojies
 * ref: https://www.w3schools.com/Chassets/ref_emoji.asp
 */

// 2.- crear un servidor 
// cb (callbak) es una *funcion que se ejecutara
//ante cualquier peticion de un resurso a nuestro server 
//(request, response)

const server = http.createServer(routes.requestHandler);
    

// 3.-Pongo a trabajar el servidor
//Le paso un callback que escribira en la consola
// Cuando el servidor este escuchando  
//192.168.100.136
server.listen(3000, '0.0.0.0', () => {
    console.log("Servidor escuchandoen http://0.0.0.0:3000");
});

