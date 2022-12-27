export class FakeValueService{
    constructor(){}

    getValue(){
        return 'fake value';
      }
    
      setValue(value: string){}
    
      //Promesas
      getPromiseValue(){
        return Promise.resolve('promise value');
      }
}