let john = {
  fullName: 'John',
  value: [124, 48, 168, 180, 42],
  calcTip: function() {
    this.tips = [];
    this.finalAmount = [];
    for (var i = 0; i < this.value.length; i++) {
      let percentage;
      let bill = this.value[i];
      if (bill < 50) {
        percentage = .2;
      } else if (bill > 50 && bill <= 200) {
        percentage = .15;
      } else {
        percentage = .1;
      }
      this.tips[i] = bill * percentage;
      this.finalAmount[i] = bill + bill + percentage;
    }
  }
}

let mark = {
  fullName: 'Mark',
  value: [224, 48, 268, 180, 42],
  calcTip: function() {
    this.tips = [];
    this.finalAmount = [];
    for (var i = 0; i < this.value.length; i++) {
      let percentage;
      let bill = this.value[i];
      if (bill < 100) {
        percentage = .2;
      } else if (bill >= 100 && bill < 300) {
        percentage = .25;
      } else {
        percentage = .25;
      }
      this.tips[i] = bill * percentage;
      this.finalAmount[i] = bill + bill + percentage;
    }
  }
}

function calcAverage(tips) {
  let sum = 0;
  for (var i = 0; i < tips.length; i++) {
    sum += tips[i];
  }
  return sum / tips.length;
}

function avgPrice(costOfMeal) {
  let sum = 0;
  for (var i = 0; i < costOfMeal.length; i++) {
    sum += costOfMeal[i];
  }
  return sum / costOfMeal.length;
}

function avgTipPercentage(averageCostOfMeal, averageTip) {
  return averageTip / averageCostOfMeal;
}


mark.calcTip();
john.calcTip();
john.averageTip = calcAverage(john.tips);
john.averageCostOfMeal = avgPrice(john.value)
john.averageTipPercentage = avgTipPercentage(john.averageCostOfMeal, john.averageTip);
mark.averageTip = calcAverage(mark.tips);
mark.averageCostOfMeal = avgPrice(mark.value)
mark.averageTipPercentage = avgTipPercentage(mark.averageCostOfMeal, mark.averageTip);
console.log(john, mark);

if(john.avgTipPercentage > mark.avgTipPercentage) {
  console.log(`John's family pays a better tip percentage`);
  console.log(`${john.averageTipPercentage} > ${mark.averageTipPercentage}`);
} else {
  console.log(`Mark's family pays a better tip percentage`);
  console.log(`${mark.averageTipPercentage} > ${john.averageTipPercentage}`);
}
