// closures
function retirement(retirementAge) {
  var a = ` years left until retirement.`;
  return function(yearOfBirth) {
    var age = 2018 - yearOfBirth;
    console.log((retirementAge - age) + a);
  }
}

var retirementUS = retirement(66);
retirementUS(1989);
retirement(60)(2001);
var retirementGermany = retirement(65);
retirementGermany(1989);
var retirementIceland = retirement(67);
retirementIceland(1989)

/*
function interviewQuestion(job) {
  if (job === 'designer') {
    return function(name) {
      console.log(name + `, can you please explain what UX design is?`);
    }
  } else if (job === `teacher`) {
    return function(name) {
      console.log(name + ', what subject do you teach?');
    }
  } else {
    return function(name) {
      console.log(name + ', explain what do you do?');
    }
  }
}
*/
function interviewQuestion(job) {
  return function(name) {
      if (job === `designer`) {
        console.log(name + `, can you please explain what UX design is?`);
      } else if (job === `teacher`) {
        console.log(name + ', what subject do you teach?');
      } else {
        console.log(name + ', explain what do you do?');
      }
  }
}
interviewQuestion('teacher')('Sean');
