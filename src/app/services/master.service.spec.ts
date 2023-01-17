import { TestBed } from '@angular/core/testing';
import { TestObject } from 'protractor/built/driverProviders';
import { MasterService } from './master.service';
import { FakeValueService } from './value-fake.services';
import { ValueService } from './value.service';

describe('MasterService', () => {
  let masterService: MasterService;

  beforeEach(() => { //se ejecuta primero antes de cada prueba
    TestBed.configureTestingModule({
      providers: [MasterService]
    });
    masterService = TestBed.inject(MasterService);
  })

  it('Should be create', () => {
    expect(masterService).toBeTruthy();
  })

  it('should be return "My value" from the real service',()=>{
    const valService = new ValueService();
    const masService = new MasterService(valService);
    expect(masService.getVaLueM()).toBe('My value');
  });
 
  it('should be return "My value" from the fake service',()=>{
    const fakeService = new FakeValueService();
    const masService = new MasterService(fakeService as unknown as ValueService);
    expect(masService.getVaLueM()).toBe('fake value');
  });
  
  it('should be return "fake" from the fake object',()=>{
    const fake = { getValue: ()=> 'fake from obj'};
    const masService = new MasterService(fake as unknown as ValueService);
    expect(masService.getVaLueM()).toBe('fake from obj');
  });
  
  it('should call to getValue from ValueService',() => {
    const valueServiceSpy = jasmine.createSpyObj('ValueService',['getValue']);
    valueServiceSpy.getValue.and.returnValue('fake value')
    
    const masService = new MasterService(valueServiceSpy);
    expect(masService.getVaLueM()).toBe('fake value');
    expect(valueServiceSpy.getValue).toHaveBeenCalled(); //methodo fue llamado
    expect(valueServiceSpy.getValue).toHaveBeenCalledTimes(1); //methodo fue llamado cuantas veces
  });
  
});
