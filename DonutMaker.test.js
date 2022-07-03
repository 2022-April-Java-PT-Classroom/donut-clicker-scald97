import { createTestScheduler } from "jest";
import DonutMaker from "./DonutMaker";


describe("DonutMaker",() => {
    
    test("should be able to add a donut and retireve the total count",() => {
//Arrange
    const underTest = new DonutMaker(0);
//Act
    underTest.addDonuts();
//Assert
    expect(underTest.numDonuts).toEqual(1);
    });

    test("should be able to add an autoclicker with 100 donuts",() => { 
        //Arrange
        const underTest = new DonutMaker(100, 0, 100);
        //Act
        underTest.addAutoClicker();
        //Assert
        expect(underTest.numDonuts).toEqual(0);
        expect(underTest.numAutoClicker).toEqual(1);
            });

    test("should NOT be able to purchase an autolicker with 99 donuts", () => {
        const underTest = new DonutMaker(99,0);
        underTest.addAutoClicker();
        expect (underTest.numDonuts).toEqual(99);
        expect(underTest.numAutoClicker).toEqual(0);

    });
            
test("every additional autoclicker should be with an increase of 10%",( )=>{
    const underTest = new DonutMaker (100,1,100);
    underTest.addAutoClicker();
    expect(underTest.costOfAutoClicker).toEqual(110)

});

    
});
