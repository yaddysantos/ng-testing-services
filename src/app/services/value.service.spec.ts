// import { TestBed } from '@angular/core/testing';

import { ValueService } from './value.service';

describe('ValueService', () => {
  let service: ValueService;

  //Ejecutara cada sentencia de codigo por cada prueba
  beforeEach(() =>{
    service = new ValueService();
  });

  it('Shoul be create', ()=>{
    expect(service).toBeTruthy();
  })

  //encerrar cada prueba en su propio metodo
  describe('Test for getValue', () => {
     it('Should return "My value"', () =>{
      expect(service.getValue()).toBe('My value');
     })
  })
  
  describe('Test for setValue', () => {
     it('Should change the value', () =>{
      expect(service.getValue()).toBe('My value');
      service.setValue('change');
      expect(service.getValue()).toBe('change');
     })
  })
  
  describe('Test for getPromiseValue', () => {
     it('Should return "promise value" from promise with THEN', (doneFunction) =>{
       service.getPromiseValue()
       .then((value)=>{
        expect(value).toBe('promise value')
        // se le informa donde terminara la prueba
        doneFunction();
      });
     });

     it('Should return "promise value" from promise using ASYNC', async () =>{
      const rta = await service.getPromiseValue();
      expect(rta).toBe('promise value');
    });
  })
});
