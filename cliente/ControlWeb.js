function ControlWeb(){

    this.mostrarAgregarUsuario=function(){
        $('#mAU').remove();
        let cadena='<div id="mAU" class="form-group">';
        cadena=cadena+'<label for="nick">Nick:</label>';
        cadena=cadena+'<input type="text" class="form-control" id="nick">';
        cadena=cadena+'<button id="btnAU" type="submit" class="btn btn-primary">Agregar usuario</button>';
        cadena=cadena + '<div id="btnGS"></div>';
        cadena=cadena+'<div id="msg"></div>'
        cadena=cadena+'</div>';

        $("#au").append(cadena);
        $('#btnGS').load("./cliente/botonGS.html");
        //#au .btn div
        $("#btnAU").on("click",function(){
            let nick=$("#nick").val();
            rest.agregarUsuario(nick);
        });
    }

    this.mostrarNumeroUsuarios = function(){
        $('#mNU').remove();
        let cadena='<div id="mNU" class="form-group">';
        cadena=cadena + '<button id="btnNU" type="Submit" class="btn btn-primary">Número de usuarios</button>';
        cadena=cadena + '<div id="msgN"></div>';
        cadena=cadena + '</div>';

        $('#nu').append(cadena);
        //$(div)
        //$(.mostrar)
        $("#btnNU").on("click",function(){  
            rest.numeroUsuarios();
         });
    }

    this.mostrarEliminarUsuario = function(){
        $('#mEU').remove();
        let cadena='<div id="mEU" class="form-group">';
        cadena=cadena + '<label for="nick">Nick:</label>';
        cadena=cadena + '<input type="text" class="form-control" id="nick">';
        cadena=cadena + '<button id="btnEU" type="Submit" class="btn btn-primary">Eliminar usuario</button>';
        cadena=cadena + '</div>';

        $('#eu').append(cadena);
        //$(div)
        //$(.mostrar)
        $("#btnEU").on("click",function(){ 
            let nick=$("#nick").val(); 
            rest.eliminarUsuario(nick)
         });
    }

    this.mostrarObtenerUsuarios = function(){
        $('#mOU').remove();
        let cadena='<div id="mOU" class="form-group">';
        cadena=cadena + '<button id="btnoU" type="Submit" class="btn btn-primary">Obtener usuarios</button>';
        cadena=cadena + '</div>';

        $('#ou').append(cadena);
        //$(div)
        //$(.mostrar)
        $("#btnoU").on("click",function(){  
            rest.obtenerUsuarios();
         });
    }

    //Función encargada de mostrar el Home una vez que el usuario este registrado
    this.mostrarHome = function(){
        //$('#mAU').remove();
        //$('#mH').remove();
        this.limpiar();
        let nick=$.cookie("nick");
        let cadena="<div id='mH'><h2>Bienvenido "+ nick+" al sitema</h2>";
        $('#au').append(cadena);
    }

    //Función encargada de mostrar por pantalla un mensaje
    this.mostrarMsg=function(cadena){
        $("#txt").remove();
        let cadena2="<div id='txt'>"+cadena+'</div>';
        $('#msg').append(cadena2);
    }

    this.comprobarSesion=function(){
        let nick=$.cookie("nick");
        if (!nick){
            cw.mostrarAgregarUsuario();
        }
        else{
            cw.mostrarHome();
        }
    }


    this.limpiar=function(){
        $("#text").remove();
        $('#mH').remove();
        $('#mAU').remove();
        $("#fmRegistro").remove();
        $("#fmLogin").remove();
    }

    this.salir=function(){
        let nick=$.cookie("nick");
        if (nick){
            rest.eliminarUsuario(nick);
        }
    }

}