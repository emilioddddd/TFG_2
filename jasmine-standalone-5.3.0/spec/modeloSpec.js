describe('El sistema', function() { 
  let sistema; 
  beforeEach(function() { 
    sistema=new Sistema() 
  }); 

  it('inicialmente no hay usuarios', function() { 
    expect(sistema.numeroUsuarios().num).toBe(0); 
  }); 
}) 