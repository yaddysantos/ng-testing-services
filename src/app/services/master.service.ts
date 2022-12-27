import { Injectable } from '@angular/core';
import { ValueService } from './value.service';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private valueService: ValueService) { }

  getVaLue(){
    //master service depende de valueservice
    return this.valueService.getValue();
  }
}
