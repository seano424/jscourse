New object
`var john = new Person('John', 2001, 'Teacher');`
Constructor Functions
`var Person = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
};`
The `new` operator points the `this` variable to the new empty object
