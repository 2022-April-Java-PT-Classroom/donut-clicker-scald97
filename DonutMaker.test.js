import DonutMaker from "./DonutMaker";

describe("DonutMaker", () => {
  it("should be able to add a donut and retrieve the total count", () => {
    //Arrange
    const underTest = new DonutMaker(0);
    //Act
    underTest.click();
    //Assert
    expect(underTest.numDonuts).toEqual(1);
  });

  it("should cost 100 donuts to buy an autoclicker if there are 0 autoclickers and the base cost is 100", () => {
    const underTest = new DonutMaker(100, 0);

    expect(underTest.costOfAutoClicker).toEqual(100);
  });

  it("should cost 110 donuts to buy an autoclicker if there is 1 autoclicker and the base cost is 100", () => {
    const underTest = new DonutMaker(100, 1);

    expect(underTest.costOfAutoClicker).toEqual(110);
  });

  it("should be able to add an autoclicker with 100 donuts", () => {
    //Arrange
    const underTest = new DonutMaker(100, 0);
    //Act
    underTest.buyAutoClicker();
    //Assert
    expect(underTest.numDonuts).toEqual(0);
    expect(underTest.numAutoClicker).toEqual(1);
  });

  it("should NOT be able to purchase an autolicker with 99 donuts", () => {
    const underTest = new DonutMaker(99, 0);
    underTest.buyAutoClicker();
    expect(underTest.numDonuts).toEqual(99);
    expect(underTest.numAutoClicker).toEqual(0);
  });

  it("every additional autoclicker should be with an increase of 10%", () => {
    const underTest = new DonutMaker(100, 1);

    expect(underTest.costOfAutoClicker).toEqual(110);
  });

  it("third autoclicker should be at a cost of 133 because that's a 10% increase of 121", () => {
    const underTest = new DonutMaker(121, 2);
    underTest.buyAutoClicker();
    expect(underTest.costOfAutoClicker).toEqual(133);
    expect(underTest.numDonuts).toEqual(0);
  });

  it("add an additional donut by using an autoclicker", () => {
    const underTest = new DonutMaker(100, 2);
    underTest.click();
    expect(underTest.numAutoClicker).toEqual(2);
    expect(underTest.numDonuts).toEqual(103);
  });

  it("add an additional donut by using an autoclicker", () => {
    const underTest = new DonutMaker(100, 3);
    underTest.click();
    expect(underTest.numAutoClicker).toEqual(3);
    expect(underTest.numDonuts).toEqual(104);
  });

  it("should allow a donut multiplier to be bought", () => {
    const underTest = new DonutMaker(100, 0);

    underTest.buyDonutMultiplier();

    expect(underTest.donutMultiplier).toEqual(1);
  });

  it("should subtract 10 from the number of donuts when a donut multiplier is bought", () => {
    const underTest = new DonutMaker(100, 0);

    underTest.buyDonutMultiplier();

    expect(underTest.numDonuts).toEqual(90);
  });

  it("should cost 11 for the second donut multiplier", () => {
    const underTest = new DonutMaker(100, 0);

    underTest.buyDonutMultiplier();

    expect(underTest.costOfDonutMultiplier).toEqual(11);
  });

  it("should cost 12 for the third donut multiplier", () => {
    const underTest = new DonutMaker(100, 0);

    underTest.buyDonutMultiplier();
    underTest.buyDonutMultiplier();

    expect(underTest.costOfDonutMultiplier).toEqual(12);
  });

  it("should not allow a donut multiplier to be bought when there are 10 donuts and already one donut multiplier", () => {
    const underTest = new DonutMaker(20);

    underTest.buyDonutMultiplier();
    underTest.buyDonutMultiplier();

    expect(underTest.donutMultiplier).toEqual(1);
  });

  it("should increase the amount of donuts gotten by clicking and having a donut multiplier so that 1.2 donuts are gotten", () => {
    const underTest = new DonutMaker(100, 0, 1);

    underTest.click();

    expect(underTest.numDonuts).toEqual(101.2);
  });

  it("should also have the donut multiplier affect donuts gotten from auto clickers", () => {
    const underTest = new DonutMaker(100, 1, 1);

    underTest.click();

    expect(underTest.numDonuts).toEqual(102.4);
  });

  it("should have 2 donut multipliers give a bonus of 1.44", () => {
    const underTest = new DonutMaker(100, 0, 2);

    expect(underTest.donutMultiplierBonus).toEqual(1.44);
  });

  it("should have subsequent donut multipliers affect the total donuts from a click with auto clickers", () => {
    const underTest = new DonutMaker(100, 2, 3);

    underTest.click();

    expect(underTest.numDonuts).toEqual(100 + 5.184);
  });
});
