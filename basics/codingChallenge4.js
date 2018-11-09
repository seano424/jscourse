let mark = {
  fullName: "Mark Mark",
  mass: 68.9,
  height: 1.78,
  bmiCalc: function() {
    this.bmi = this.mass / (this.height * 2);
  }
};
let john = {
  fullName: "John John",
  mass: 77.1,
  height: 1.73,
  bmiCalc: function() {
    this.bmi = this.mass / (this.height * 2);
  }
};

john.bmiCalc();
mark.bmiCalc();

function whoIsBigger(){
  if(john.bmi > mark.bmi) {
    console.log(`John has a larger bmi. His bmi is ${john.bmi}. Mark's bmi is ${mark.bmi}`);
  } else if (mark.bmi > john.bmi) {
    console.log('Mark has a larger bmi');
  } else {
    console.log('It seems they have the same bmi...');
  }
}
whoIsBigger();
