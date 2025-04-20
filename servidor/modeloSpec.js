const modelo = require("./modelo.js");

describe('El sistema', function() { 
  let sistema; 
  beforeEach(function() { 
    sistema=new modelo.Sistema() 
  }); 

  it('inicialmente no hay usuarios', function() { 
    expect(sistema.numeroUsuarios().num).toBe(0); 
  }); 
  it("Comprobamos agregar usuario con nick", function(){
    //comprobar que no hay usuarios
    expect(sistema.numeroUsuarios().num).toEqual(0);
    //agregar un usuario concreto
    sistema.agregarUsuario("Pepe");
    //comprobar que hay 1 usuario en el sistema
    expect(sistema.numeroUsuarios().num).toEqual(1);
    expect(sistema.usuarioActivo("Pepe").activo).toEqual(true);

  });

  it("Comprobamos eliminar usuario", function(){
    //comprobar que no hay usuario
    expect(sistema.numeroUsuarios().num).toEqual(0);
    //agregamos un usuario
    sistema.agregarUsuario("Pepe");
    //comprobamos que el usuario creado esta en el sistema
    expect(sistema.numeroUsuarios().num).toEqual(1);
    expect(sistema.usuarioActivo("Pepe").activo).toEqual(true);
    //eliminamos el usuario
    sistema.eliminarUsuario("Pepe");
    //comprobamos que el usuario eliminado no esta en el sistema
    expect(sistema.numeroUsuarios().num).toEqual(0);
  });

  it("comprobar usuario activo", function(){
    //comprobar que no hay usuario
    expect(sistema.numeroUsuarios().num).toEqual(0);
    //agregamos un usuario
    sistema.agregarUsuario("Pepe");
    //comprobamos que el usuario creado esta en el sistema
    expect(sistema.numeroUsuarios().num).toEqual(1);
    expect(sistema.usuarioActivo("Pepe").activo).toEqual(true);
  });

  it("comprobar el método número de usuarios", function(){
    //calcular las claves del array asociativo Object.keys(sistema.usuarios)
    //comprobamos que el valor pro numeroUsuarios() es igual al anterior
    let res=sistema.numeroUsuarios();
    expect(res.num).toEqual(0);
    sistema.agregarUsuario("Pepe");
    res=sistema.numeroUsuarios();
    expect(res.num).toEqual(1);
  });

  it("comprobar el metodo obtener usuarios", function(){
    let res = sistema.obtenerUsuarios();
    expect(res.list).toEqual([]);
    sistema.agregarUsuario("Pepe");
    sistema.agregarUsuario("Luis");
    res = sistema.obtenerUsuarios();
    expect(res.list).toEqual(["Pepe", "Luis"])
  })
}) 