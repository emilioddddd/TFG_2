function Sistema(){ 
    this.usuarios={}; 
    this.agregarUsuario=function(nick){ 
        let res={"nick":-1};
        if (!this.usuarios[nick]){
            this.usuarios[nick]=new Usuario(nick);
            res.nick=nick;
        }
        else{
            console.log("el nick "+nick+" está en uso"); 
        }
        return res;
    } 

    this.eliminarUsuario = function(nick){
        res = {"eliminado":false}
        if(this.usuarios[nick]){
            delete this.usuarios[nick]
            res = {"eliminado":true}
        }
        return res
    }

    this.obtenerUsuarios = function(){
        let res = {"list":[]};
        for (let i=0; i < Object.keys(this.usuarios).length; i++){
            res.list.push(Object.keys(this.usuarios)[i]);
        }
        return res
    }

    this.usuarioActivo = function(nick){
        let res = {"activo":false}
        if (this.usuarios[nick]!=undefined){
            return res = {"activo":true};
        }
        return res
    }
    this.numeroUsuarios = function(){
        //return Object.keys(this.usuarios).length;
        let res = {"num":Object.keys(this.usuarios).length};
        return res
    }
} 
function Usuario(nick){ 
    this.nick=nick; 
}

//Para exportar la función Sistema
module.exports.Sistema=Sistema