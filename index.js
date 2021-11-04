//Importar el modulo http
import http from 'http';

// crear un servidor 
// cb (callbak) es una *funcion que se ejecutara
//ante cualquier peticion de un resurso a nuestro server 
//(request, response)
const server = http.createServer((req, res)=>{
    console.log(">Se ha recibido una peticion");
   //Registrar informacion de la peticion 
   console.log(' Informacion de la peticion ');
   console.log(' url: ${req.url} '); 
   console.log(' Request Method: ${req.method}');
   console.log(' Plataforma del cliente: ${req.headers[sec-ch-ua-platform]} ');
    // Logeando el objeto req: peticion
    //console.log(req);
    //Establecer el tipo de contenido que se entregara al cliente
    res.setHeader('Cpntent-Type', 'text/html');
    res.write("<html>");
    res.write("<head><title> My App </title></head>");
    res.write("<body><h1> Hello from the server </h1></body>");
    res.write("</html<P>");
    //Respondemos
    res.write("Esta es la respuesta del servidor.");
    // Terminar la conexion
    res.end();
});

// 3.-Pongo a trabajar el servidor
//192.168.100.136
server.listen(3000, '192.168.100.136', () => {
    console.log("Servidor escuchandoen http://192.168.100.136:3000");
});

console.log('Hello node')