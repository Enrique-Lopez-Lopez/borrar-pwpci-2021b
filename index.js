//Importar el modulo http
import http from 'http';
//Importando el module de routes
import {requestHandler} from "./routes.js"
//3.- Importando express
// $ npm i express -s
import Express from 'express'
import { addAbortSignal } from 'stream';

// Crea una instancia de Express
const app = Express();  // (req, res, next)=>{} event handler

// Registrando el primer middleware
app.use((req, res, next)=>{
    //Registrar un mensaje en el log
    console.log("Estoy en el middleware 1");
    // Dar la instruccion de pasar el siguiente middleware
    next();
});
//Registrando el segundo middleware
app.use((req, res, next)=>{
    //Registrar un mensaje en el log
    console.log("Estoy en el middleware 2");
    // Dar la instruccion de pasar el siguiente middleware
    next();
});
app.use((_, res)=>{
    //Registrar un mensaje en el log
    console.log("Estoy en el middleware 3");
    console.log("Emitiendo respuesta a cliente");
    res.send("<h1>Mi respuesta</h1> \n Hola");
});

/**
 * Codigos de Emojies
 * ref: https://www.w3schools.com/Chassets/ref_emoji.asp
 */

//Poniendo a escuchar la app de express
app.listen(3000, '0.0.0.0',()=>{
    console.log("Servidor escuchando en http://0.0.0.0:3000");
});


