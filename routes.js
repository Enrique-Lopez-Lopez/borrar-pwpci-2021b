import fs from "fs";
const requestHandler = (req, res) =>{ 
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
                <h1> Enviar mensaje</h1>
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

        //EjecutaOperacion(ARGS1,ARGS2,ARGS3, cb)
        // Modelo Asincromo
        //Suma1Numeros(1,2(res)=>{console.log(res)})
        /*
        1. let res = Suma2Numeros(1,2);
        2. console.log(res)//undefined
        */

        // 3.- Registrando un manejador de fin de recepcion de datos
        req.on('end',()=>{
            const parasedBody =Buffer.concat(body).toString();
            const message = parasedBody.split('=')[1];
            //Guardando el mensaje en un archivo
            fs.writeFile('message.txt', message, (err)=>{
                if(err){
                    console.log("> No se pudo grabar el archivo");
                res.statusCode = 500;
                res.setHeader("Content-Type","text/html");
                res.write("ERROR WHEN LOADING FILE");
                return res.end();
                }
                 // Establecer el status code de redireccionamiento
            res.statusCode = 302; 
            //Establecer la ruta de dirrecciones
            res.setHeader('Location', '/');
            });
            //fs.writeFileSync('message.txt',message);
            // Establecer el status code de redireccionamiento
            res.statusCode = 302; 
            //Establecer la ruta de dirrecciones
            res.setHeader('Location', '/');
            //Finalizo conexion
            return res.end();
        });
   

    // Terminarl el procesamiento del formulario
    }else if(url === 'author'){
        // Respuesta ante "Get"/*
        // 1.- Estableciendo el tipo de retorno
        // Como HTML
        res.setHeader('Content-Type', 'text/html');
        let url_imagen = "https://www.nike.com/mx/launch/t/air-jordan-4-tech-white";
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
   
};

//Exportar el requestHandler
export default{
    requestHandler
};