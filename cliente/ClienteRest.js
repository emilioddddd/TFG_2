function ClienteRest(){ 
    this.agregarUsuario=function(nick){
        var cli=this;
        if (!nick || nick == ""){
            return 0;
        }
        $.getJSON("/agregarUsuario/"+nick,function(data){ 
            if (data.nick!=-1){
                console.log("Usuario "+nick+" ha sido registrado")
                //$.cookie("nick",nick);
                //cw.mostrarHome();
                
            }
            else{
                console.log("El nick ya está ocupado");
                //cw.mostrarMsg("El nick esta ocupada", "msg");
                //cw.comprobarSesion();
            }
        });
        // este codigo se ejecuta sin esperar a que se resuelva 
    }

    this.eliminarUsuario = function(nick){
        var cli = this;
        $.getJSON("/eliminarUsuario/"+nick, function(data){
            if (data.eliminado){
                console.log("Usuario "+nick+" a sido eliminado")
                //$.removeCookie("nick");
                location.reload();
            }else{
                console.log("Usuario "+nick+ " ya ha sido eliminado")
            }
        }) 
    }

    this.numeroUsuarios = function(){
        var cli = this;
        $.getJSON("/numeroUsuarios/", function(data){
            console.log("numero: " + data.num);
            //cw.mostrarMsg("numero: " + data.num, "msgN");
        })
    }
     
    this.usuarioActivo = function(nick){
        var cli = this;
        $.getJSON("/usuarioActivo/", function(data){
            if(data.activo){
                console.log("Usuario " + nick + " esta activo")
            }else{
                console.log("Usuario " + nick + " no esta activo")
            }
        })
        let res = {"activo":false}
        if (this.usuarios[nick]!=undefined){
            return res = {"activo":true};
        }
        return res
    }
    this.obtenerUsuarios = function(){
        var cli = this;
        $.getJSON("/obtenerUsuarios/", function(data){
            if(data.list == []){
                console.log("No hay usuarios")
            }else{
                for(let i=0; i < data.list.length; i++){
                    console.log("El usuario "+ i+1 + " es "+data.list[i])
                }
            }
        })
    }
} 