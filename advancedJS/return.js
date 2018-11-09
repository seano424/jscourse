// Functions returning Functions
//
// function interviewQuestion(job) {
//   if (job === 'designer') {
//     return function(name) {
//       console.log(name + `, can you please explain what UX design is?`);
//     }
//   } else if (job === `teacher`) {
//     return function(name) {
//       console.log(name + ', what subject do you teach?');
//     }
//   } else {
//     return function(name) {
//       console.log(name + ', explain what do you do?');
//     }
//   }
// }
//
// var teacherQuestion = interviewQuestion('teacher');
// teacherQuestion('Sean');
//
// var designerQuestion = interviewQuestion('designer');
// designerQuestion('Harry');
//
// var defaultQuestion = interviewQuestion('');
// defaultQuestion('Yaro');

function interviewQuestion(job) {
  switch (job) {
    case `designer`:
      return function(name) {
        console.log(name + ' explain UX');
      }
      break;
    case `teacher`:
      return function(name) {
        console.log(name + ', what subject do you teach?');
      }
      break;
    default:
      return function(name) {
        console.log(name + ', what do you do?');
      }
}
  }
//This one below is weird! But it works also...
interviewQuestion('teacher')('Ravi');
//These ones below are more of a norm...
var teacherQuestion = interviewQuestion('teacher');
teacherQuestion('Sean');

var designerQuestion = interviewQuestion('designer');
designerQuestion('Harry');

var defaultQuestion = interviewQuestion('');
defaultQuestion('Yaro');
