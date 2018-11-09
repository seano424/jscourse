// arrays
let names = ['Vampires', 'Ghosts', 'Frankenstein\'s Monster'];
let years = new Array(1402, 1883, 1832);
console.log(names);
console.log(names.length);
names[3] = 'The Wicked Witch of the West';
console.log(names);
let zorro = 'Zorro';
names.push(zorro);
console.log(names);
let zombies = 'Zombies';
names.unshift(zombies);
console.log(names);
console.log(names.indexOf('Ghosts'));
var isBat = names.indexOf('Bat') === -1 ? 'There isn\'t a bat here!' : `There is a bat here!`;
console.log(isBat);
