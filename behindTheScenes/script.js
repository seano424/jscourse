//Hoisting
calculateAge(1989);
function calculateAge(year) {
  console.log(`Tienes ` + (2018 - year) + ` anos`);
}

let retirement = function(year) {
  console.log(65 - (2018 - year));
};
retirement(1989);

console.log(age);
var age = 44;

function foo() {
  console.log(`hey ` + age);
  var age = 65;
  console.log(age);
}
foo();
console.log(age);

var a = `Hello!`;
first()
  function first() {
    var b = `Hi!`;
    second();

    function second() {
      var c = `Hey!`;
      console.log(a + b + c);
    }
  }
