let tipCalculator = function(amount) {
  if (amount < 50) {
    return amount + (amount *= .2);
  } else if (amount >= 50 && amount <= 200) {
    return amount + (amount *= .15);
  } else {
    return amount + (amount *= .1);
  }
}

console.log(tipCalculator(20));
let bills = [124, 48, 268];
let finalAmounts = [tipCalculator(bills[0]),
  tipCalculator(bills[1]),
  tipCalculator(bills[2])
];
console.log(finalAmounts);
