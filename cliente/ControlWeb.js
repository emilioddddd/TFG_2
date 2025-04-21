function ControlWeb(){

    this.mostrarAgregarUsuario = function(){
        //$('#mAU').remove();
        //$('#mH').remove();
        let cadena='<div id="mAU" class="form-group">';
        cadena=cadena + '<label for="nick">Nick:</label>';
        cadena=cadena + '<input type="text" class="form-control" id="nick">';
        cadena=cadena + '<button id="btnAU" type="Submit" class="btn btn-primary">Añadir usuario</button>';
        cadena=cadena + '<div id="btnGS"></div>';
        cadena=cadena + '<div id="msg"></div>';
        cadena=cadena + '</div>';

        $('#au').append(cadena);
        //$('#btnGS').load("./cliente/botonGS.html");
        //$(div)
        //$(.mostrar)
        $("#btnAU").on("click",function(){ 
            let nick=$("#nick").val(); 
            rest.agregarUsuario(nick)
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

    this.limpiar=function(){
        $("#text").remove();
        $('#mH').remove();
        $('#mAU').remove();
        $("#fmRegistro").remove();
        $("#fmLogin").remove();
    }
}