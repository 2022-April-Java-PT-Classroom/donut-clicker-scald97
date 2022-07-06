const baseCostOfAutoClicker = 100;
const baseCostOfDonutMultiplier = 10;

class DonutMaker {
  constructor(numDonuts, numAutoClicker = 0, donutMultiplier = 0) {
    this.numDonuts = numDonuts;
    this.numAutoClicker = numAutoClicker;
    this.donutMultiplier = donutMultiplier;
  }

  click() {
    this.numDonuts += (1 + this.numAutoClicker) * this.donutMultiplierBonus;
  }

  buyAutoClicker() {
    if (this.numDonuts >= this.costOfAutoClicker) {
      this.numDonuts -= this.costOfAutoClicker;
      this.numAutoClicker++;
    }
  }

  get costOfAutoClicker() {
    return Math.round(
      baseCostOfAutoClicker * Math.pow(1.1, this.numAutoClicker)
    );
  }

  buyDonutMultiplier() {
    if (this.numDonuts >= this.costOfDonutMultiplier) {
      this.numDonuts -= baseCostOfDonutMultiplier;
      this.donutMultiplier += 1;
    }
  }

  get costOfDonutMultiplier() {
    return Math.round(
      baseCostOfDonutMultiplier * Math.pow(1 + 0.1, this.donutMultiplier)
    );
  }
  get donutMultiplierBonus() {
    return Math.pow(1.2, this.donutMultiplier);
  }
}

export default DonutMaker;
