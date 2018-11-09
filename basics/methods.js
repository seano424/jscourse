let sean = {
  favDirector: 'Wes Anderson',
  favScaryMovie: 'Hocus Pocus',
  favNumber: 4,
  birthYear: 1989,
  favColor: 'red-orange',
  favAnimal: 'Giraffe',
  favFood: 'Japanese',
  calcAge: function() {
    this.age = 2018 - this.birthYear;
  }
};
sean.calcAge();
console.log(sean);
