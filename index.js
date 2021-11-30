//Importar el modulo http
import http from 'http';
import {requestHandler} from "./routes.js"
//3.- Importando express
import Express from 'express'

// Crea una instancia de Express
const app = Express();  // (req, res, next)=>{} event handler

/**
 * Codigos de Emojies
 * ref: https://www.w3schools.com/Chassets/ref_emoji.asp
 */

// 2.- crear un servidor tomando como 
//  manejadpr de peticiones a express

const server = http.createServer(app);
    

// 3.-Pongo a trabajar el servidor
//Le paso un callback que escribira en la consola
// Cuando el servidor este escuchando  
//192.168.100.136
server.listen(3000, '0.0.0.0', () => {
    console.log("Servidor escuchandoen http://0.0.0.0:3000");
});

