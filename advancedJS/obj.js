

////////////////////////
// Lecture:  Bind, call, and apply

var john = {
  name: 'John',
  age: 29,
  job: 'Teacher',
  presentation: function(style, timeOfDay) {
    if (style === 'formal') {
      console.log('Good ' + timeOfDay + ' Ladies and Gentlemen! I\'m ' + this.name + ' I\'m a ' + this.job + ' and I am ' + this.age);
    } else if (style === 'friendly') {
      console.log(`Hey! What's up! I'm ` + this.name + `. Have a nice ` + timeOfDay);
    }
  }
};

var emily = {
  name: `Emily`,
  age: 35,
  job: `designer`
};

john.presentation('formal', 'morning');
john.presentation.call(emily, 'friendly', 'afternoon');
john.presentation.apply(emily, ['friendly', 'afternoon'])
var johnFriendly = john.presentation.bind(john, 'friendly');
johnFriendly('evening');
johnFriendly('morning');
var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('morning');
