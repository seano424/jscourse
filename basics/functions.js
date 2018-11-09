// Functions
function calculateAge(birthYear) {
  return 2018 - birthYear;
}
let ageSean = calculateAge(1989);

function yearsUntilRetirement(year, firstName) {
  let age = calculateAge(year);
  let retirement = 65 - age;
  console.log(`${firstName} retires in ${retirement} years.`);
}
