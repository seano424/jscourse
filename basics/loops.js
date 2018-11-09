for(var i = 0; i < 10; i += 2) {
  console.log(i);
}
//for loop
let sean = ['Sean', 'OReilly', 'Kansas City', 1989];
for(var i = 0; i < sean.length; i++) {
  console.log(sean[i]);
}
//while loop
let j = 0;
while(j < sean.length) {
    console.log(sean[j]);
    j++;
}
//continue and break statements
let creature = ['smelly', 'creepy', 'scary', 'ooky', 2001, 'kooky'];
// for(var k = 0; k < creature.length; k++) {
//   if(typeof creature[k] !== 'string') continue;
//   console.log(creature[k]);
// }
// for(var k = 0; k < creature.length; k++) {
//   if(typeof creature[k] !== 'string') break;
//   console.log(creature[k]);
// }
// looping backwards
for (var g = creature.length - 1; g >= 0; g--) {
  console.log(creature[g]);
}
console.log(creature.length);
