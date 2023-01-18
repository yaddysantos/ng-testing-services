import { TestBed } from '@angular/core/testing';
import { MasterService } from './master.service';
import { ValueService } from './value.service';

describe('MasterService', () => {
  let masterService: MasterService;
  let valueServiceSpy: jasmine.SpyObj<ValueService>;

  beforeEach(() => { //se ejecuta primero antes de cada prueba
    //Se crea un objeto para poder espiar el servicio
    const spy = jasmine.createSpyObj('ValueService',['getValueV']);
    
    TestBed.configureTestingModule({ //Modulo del servicio
      providers: [
        MasterService,
        { provide: ValueService, useValue: spy}
      ]
    });
    masterService = TestBed.inject(MasterService);
    valueServiceSpy = TestBed.inject(ValueService) as jasmine.SpyObj<ValueService>;
  })

  it('Should be create', () => {
    expect(masterService).toBeTruthy();
  })

  // it('should be return "My value" from the real service',()=>{
  //   const valService = new ValueService();
  //   const masService = new MasterService(valService);
  //   expect(masService.getVaLueM()).toBe('My value');
  // });
 
  // it('should be return "My value" from the fake service',()=>{
  //   const fakeService = new FakeValueService();
  //   const masService = new MasterService(fakeService as unknown as ValueService);
  //   expect(masService.getVaLueM()).toBe('fake value');
  // });
  
  // it('should be return "fake" from the fake object',()=>{
  //   const fake = { getValue: ()=> 'fake from obj'};
  //   const masService = new MasterService(fake as unknown as ValueService);
  //   expect(masService.getVaLueM()).toBe('fake from obj');
  // });
  
  it('should call to getValue from ValueService',() => {
    //const valueServiceSpy = jasmine.createSpyObj('ValueService',['getValue']);
    valueServiceSpy.getValueV.and.returnValue('fake value')
    //const masService = new MasterService(valueServiceSpy);
    expect(masterService.getVaLueM()).toBe('fake value');
    expect(valueServiceSpy.getValueV).toHaveBeenCalled(); //methodo fue llamado
    expect(valueServiceSpy.getValueV).toHaveBeenCalledTimes(1); //methodo fue llamado cuantas veces
  });
  
});
