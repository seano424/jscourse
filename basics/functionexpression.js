//function expression
let whatDoYouDo = function(job, firstName) {
  switch (job) {
    case 'teacher':
      return firstName + ' teaches kids.';
    case 'driver':
      return firstName + ' drives taxis.';
    case 'designer':
      return firstName + ' designs websites.';
    default:
      return firstName + ' does something else';
  }
};
console.log(whatDoYouDo('teacher', 'Sean'));
console.log(whatDoYouDo('designer', 'Count Dracula'));
console.log(whatDoYouDo('driver', 'Sir Mummy'));
