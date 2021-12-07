//Importar el modulo http
import http from 'http';
//Importando el module de routes
import {requestHandler} from "./routes.js"
//3.- Importando express
// $ npm i express -s
import Express from 'express'

// Crea una instancia de Express
const app = Express();  // (req, res, next)=>{} event handler

app.use('/about',(_, res)=>{
    console.log('Se ha realizado la peticion: "/about"')
    res.send("<h1>Acerca de ...</h1>\n Sitio inicial hecho con Node.js");
});

app.use('/',(_, res)=>{
    //Registrar un mensaje en el log
    console.log('Se ha realizado la peticion: "/"');
    res.send("<h1>Mi App</h1> \n Bienvenido a este sitio");
});



/**
 * Codigos de Emojies
 * ref: https://www.w3schools.com/Chassets/ref_emoji.asp
 */

//Poniendo a escuchar la app de express
app.listen(3000, '0.0.0.0',()=>{
    console.log("Servidor escuchando en http://0.0.0.0:3000");
});


