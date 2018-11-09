/* Variables */

let firstName = 'Kurt',
  lastName = 'Vonnegut',
  birthYear = 1922,
  fullAge = false,
  age = 2018 - birthYear,
  job;

job = 'writer';
console.log(firstName + ' ' + lastName + ` is a wonderful ${job}. He would be ${age} years old if he were still alive.`);

//typeof operator
console.log(typeof age, typeof firstName);
//it will say:    number        string
