//Function Constructor

var john = {
  name: `John`,
  yearOfBirth: 1990,
  job: `teacher`
};

var Person = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
};

Person.prototype.calculateAge = function(arguments) {
  console.log(this.name + ' is about ' + (2018 - this.yearOfBirth) + ` years old.`);
};

Person.prototype.lastName = `O'Reilly`;
var john = new Person('John', 2001, 'Marine Biologist');
var sean = new Person('Sean', 1989, 'Teacher');
var mark = new Person(`Mark`, 1948, `Retired`);

var AfroSamurai = function(character, actor, summary) {
  this.character = character;
  this.actor = actor;
  this.summary = summary;
};

var afro = new AfroSamurai(`Afro`, `Samuel L. Jackson`, `The protagonist, hell-bent on revenge for his father, who was killed by Justice before his very eyes.`);
var rokutaro = new AfroSamurai(`Rokutaro`, `Greg Eagles`, `Father of the protagonist, and bearer of the Number 1 Headband. Killed by Justice in order to claim said headband. Resurrected by Sio in Resurrection.`);
var ninjaNinja = new AfroSamurai(`Ninja Ninja`, `Samuel L. Jackson`, `Apparently Afro's only friend, he follows Afro on his quest for revenge. He seems to disappear before every fight or is seen as a spectator commenting on the battles.`);
var justice = new AfroSamurai(`Justice`, `Ron Perlman`, `A gunslinger who before the series began became the Number Two, he becomes the Number One when he kills Afro's father, setting the plot in motion.`);

AfroSamurai.prototype.howManyKills = function () {
  var randomNumber = Math.floor(Math.random() * 100) + 3;
  console.log(this.character + ' has accumulated ' + randomNumber + " kills. Murderer!");
}

AfroSamurai.prototype.showName = `Afro Samurai`;
rokutaro.howManyKills();
console.log(afro);

var x = [2,4,6];
