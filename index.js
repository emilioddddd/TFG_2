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

app.listen(PORT, () => { 
    console.log(`App está escuchando en el puerto ${PORT}`); 
    console.log('Ctrl+C para salir'); 
});