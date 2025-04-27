//http://localhost:3000/
const fs=require("fs"); 
const express = require('express'); 
const app = express(); 
const modelo = require("./servidor/modelo.js"); 

const passport = require("passport");
//const LocalStrategy = require('passport-local').Strategy;
const cookieSession = require("cookie-session");
require('./servidor/passport-setup');

const PORT = process.env.PORT || 3000; 

let sistema = new modelo.Sistema();

app.use(express.static(__dirname + "/")); 

//Inicializar el middleware
app.use(cookieSession({ 
    name: 'Sistema', 
    keys: ['key1', 'key2'] 
})); 

app.use(passport.initialize()); 
app.use(passport.session()); 

//Manejadores de las rutas
app.get("/auth/google",passport.authenticate('google', { scope: ['profile','email'] })); 

app.get('/google/callback',  
    passport.authenticate('google', { failureRedirect: '/fallo' }), 
    function(req, res) { 
    res.redirect('/good'); 
}); 

app.get("/good", function(request,response){ 
    let nick=request.user.emails[0].value; 
    if (nick){ 
        sistema.agregarUsuario(nick); 
    } 
    //console.log(request.user.emails[0].value);   
    response.cookie('nick',nick); 
    response.redirect('/'); 
}); 

app.get("/fallo",function(request,response){ 
    response.send({nick:"nook"}) 
}); 

//Sección donde se recoge la información
app.get("/", function(request,response){ 
    /*
    response.statusCode = 200; 
    response.setHeader('Content-Type', 'text/plain'); 
    response.end('Hola Mundo!'); 
    */
   //Redirecciona al index.html de la carpera cliente
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

//Muestra porque puerto se esta ejecutando
app.listen(PORT, () => { 
    console.log(`App está escuchando en el puerto ${PORT}`); 
    console.log('Ctrl+C para salir'); 
});