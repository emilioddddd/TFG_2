//http://localhost:3000/
const fs=require("fs"); 
const express = require('express'); 
const app = express(); 
const modelo = require("./servidor/modelo.js"); 

const PORT = process.env.PORT || 3000; 

let sistema = new modelo.Sistema();

app.use(express.static(__dirname + "/")); 

app.get("/", function(request,response){ 
    /*
    response.statusCode = 200; 
    response.setHeader('Content-Type', 'text/plain'); 
    response.end('Hola Mundo!'); 
    */
    var contenido=fs.readFileSync(__dirname+"/cliente/index.html"); 
    response.setHeader("Content-type","text/html"); 
    response.send(contenido); 
}); 

app.get("/agregarUsuario/:nick",function(request,response){ 
    let nick=request.params.nick;  
    let res=sistema.agregarUsuario(nick); 
    // Ojo estoy asumiendo que agregarUsuario(nick) es una llamada sincrona
    response.send(res); 
}); 

app.get("/obtenerUsuarios/", function(request,response){
    let res=sistema.obtenerUsuarios();
    // Ojo estoy asumiendo que agregarUsuario(nick) es una llamada sincrona
    response.send(res);
});

app.get("/usuarioActivo/:nick",function(request,response){
    let nick=request.params.nick; 
    let res=sistema.usuarioActivo(nick);
    // Ojo estoy asumiendo que agregarUsuario(nick) es una llamada sincrona
    response.send(res);
});

app.get("/numeroUsuarios/", function(request,response){
    let res=sistema.numeroUsuarios();
    // Ojo estoy asumiendo que agregarUsuario(nick) es una llamada sincrona
    response.send(res);
});

app.get("/eliminarUsuario/:nick",function(request,response){
    let nick=request.params.nick; 
    let res=sistema.eliminarUsuario(nick);
    // Ojo estoy asumiendo que agregarUsuario(nick) es una llamada sincrona
    response.send(res);
});

app.listen(PORT, () => { 
    console.log(`App está escuchando en el puerto ${PORT}`); 
    console.log('Ctrl+C para salir'); 
});