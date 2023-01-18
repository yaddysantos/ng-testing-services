import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValueService {

  private value = 'My value';

  constructor() { }

  getValueV(){
    return this.value;
  }

  setValue(value: string){
    this.value = value;
  }

  //Promesas
  getPromiseValue(){
    return Promise.resolve('promise value');
  }

  //Observables
  getObservableValue(){
    return of('observable value')
  }
}
