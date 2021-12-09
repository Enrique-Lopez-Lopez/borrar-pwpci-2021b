//Importar el modulo http
import http from 'http';
//Importando el module de routes
import {requestHandler} from "./routes.js"
//3.- Importando express
// $ npm i express -s
import Express from 'express'

// Crea una instancia de Express
const app = Express();  // (req, res, next)=>{} event handler

//1. Insertando Middleware para la lectura de datos
// desde un cliente
app.use(Express.urlencoded({extended:false}));

//Loggin de peticiones
app.use((req,res,next)=>{
    console.log(`Se ha realizado la peticion: "${req,method}:${req.path}`);
    next();
});

// Se debe colocar primero ya que el orden de registro 
// determina el orden de verificacion
app.use('/about',(_, res)=>{
    res.send("<h1>Acerca de ...</h1>\n Sitio inicial hecho con Node.js");
});

//Sirviendo recurso de formulario
app.use('/add-student-form', (req, res, next)=> {
    res.send(`<form action="/add-student" method = "POST">
        <label fro="student-name"> Student Name </label>
        <input type="text" name="name" id = "student-name">
        </button type="submit">Add student</button>
    </form>
    `);
});

//Ruta que procesa el formulario
app.use('/add-student',(req, res, next)=>{
    //Iterando sobre todo el objeto
    for(const prop in req.body){
        console.log(`${prop}:${req[prop]}`);
    }
    console.log(`Metodo: ${req.method}`);
    
    res.json(req.body);
    //REalizaos un redireccinamiento 
    // res.redirect('/');
}); 

//La ruta raiz entra en todo tipo de peticion
app.use(['/', '/home'],(_, res)=>{
    //Registrar un mensaje en el log
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


