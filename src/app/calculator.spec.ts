import { Calculator } from "./calculator";

xdescribe('Test for calculator', () => {
    it('#multiplay should return a nine',() => {
        //Arrange
        const calculator = new Calculator();
        //Act
        const rta = calculator.multiplay(3,3);
        //Assert
        expect(rta).toEqual(9)
    });
    
    it('#divide should return some',() => {
        //Arrange
        const calculator = new Calculator();
        //Act
        //Assert
        expect(calculator.divide(6,2)).toEqual(3)
    });
    
    it('#divide for zero',() => {
        //Arrange
        const calculator = new Calculator();
        //Act
        //Assert
        expect(calculator.divide(6,0)).toBeNull()
    });

    it('test marchers', () => {
        let name;

        expect(name).toBeUndefined();
        expect(1+3 === 4).toBeTruthy();
    })
});