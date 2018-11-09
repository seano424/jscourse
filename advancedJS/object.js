//Object.create
/*
var personProto = {
  calculateAge: function() {
    console.log(2018 - this.yearOfBirth);
  }
};

var sean = Object.create(personProto);
sean.name = 'Sean';
sean.yearOfBirth = 1989;

console.log(sean);

var jarJar = Object.create(personProto, {
  name: { value: `Jar Jar Binks` },
  yearOfBirth: { value: 1969 },
  job: { value: `Nothingness` }
});

console.log(jarJar);
*/



// Primitives vs Objects

//Primatives
var a = 23;
var b = a;
a = 46;
console.log(a, b);

//Objects
var obj1 = {
  name: `Sean`,
  age: 26
};
var obj2 = obj1;
obj1.age = 30;
console.log(obj1, obj2);

//Functions
var age = 27;
var obj = {
  name: `Jonas`,
  city: `Lisbon`
};

function change(a, b) {
  a = 30;
  b.city = `San Francisco`;
}

change(age, obj);

console.log(age);
console.log(obj.city);
















//
