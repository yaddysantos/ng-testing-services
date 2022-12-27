import { MasterService } from './master.service';
import { FakeValueService } from './value-fake.services';
import { ValueService } from './value.service';

describe('MasterService', () => {
  it('should be return "My value" from the real service',()=>{
    const valService = new ValueService();
    const masService = new MasterService(valService);
    expect(masService.getVaLue()).toBe('My value');
  });
 
  it('should be return "My value" from the fake service',()=>{
    const fakeService = new FakeValueService();
    const masService = new MasterService(fakeService as unknown as ValueService);
    expect(masService.getVaLue()).toBe('fake value');
  });
  
  it('should be return "fake" from the fake object',()=>{
    const fake = { getValue: ()=> 'fake from obj'};
    const masService = new MasterService(fake as unknown as ValueService);
    expect(masService.getVaLue()).toBe('fake from obj');
  });
  
});
