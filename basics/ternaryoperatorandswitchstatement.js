let firstName = 'Patrick',
    age = 21,
    drink = age >= 18 ? 'beer' : 'juice';

age >= 18 ? console.log(`${firstName} can drink ${drink}.`) :   console.log(`${firstName} can drink ${drink}.`);

let job = `teacher`;
switch (job) {
  case 'teacher':
  case `instructor`:
      console.log(`${firstName} teaches kids.`);
      break;
  case 'driver':
      console.log(`${firstName} drives a taxi.`);
      break;
  case `designer`:
      console.log(`${firstName} designs pages`);
  default:
      console.log(`${firstName} does something else.`)
}
