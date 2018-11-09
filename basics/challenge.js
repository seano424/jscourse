// BMI
// BMI = mass / height ^ 2
// mass in kg and height in meters
let marksMass = 68,
    marksHeight = 1.76,
    johnsMass = 76,
    johnsHeight = 1.76,
    bmiOfMark = marksMass / (marksHeight * 2),
    bmiOfJohn = johnsMass / (johnsHeight * 2),
    isMarkBigger = bmiOfMark > bmiOfJohn;
console.log(`Mark's BMI: ${bmiOfMark}, John's BMI: ${bmiOfJohn}, Is Mark's BMI greater: ${isMarkBigger}`);
