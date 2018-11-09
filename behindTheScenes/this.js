// console.log(this);
// calcAge(1985);
// function calcAge(year) {
//   console.log(2018 - year);
//   console.log(this);
// }

var john = {
  name: 'john',
  yearOfBirth: 1998,
  calcAge: function() {
    console.log(this);
    console.log(2018 - this.yearOfBirth);
    // 
    // function innerFunc() {
    //   console.log(this);
    // }
    // innerFunc();
  }
}
john.calcAge();

let mike = {
  name: 'Mike',
  yearOfBirth: 1984
};

mike.calcAge = john.calcAge;
mike.calcAge();
