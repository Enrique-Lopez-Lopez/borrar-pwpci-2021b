//Importar el modulo http
import http from 'http';

// crear un servidor 
// cb (callbak) es una *funcion que se ejecutara
//ante cualquier peticion de un resurso a nuestro server 
//(request, response)
const server = http.createServer((req, res)=>{
    console.log(">Se ha recibido una peticion");
    //Respondemos
    req.rawListeners('Hola');
    // Terminar la conexion
    res.end();
});

// 3.-Pongo a trabajar el servidor
//192.168.100.136
server.listen(3000, '192.168.100.136', () => {
    console.log("Servidor escuchandoen http://192.168.100.136:3000");
});

console.log('Hello node')