
let johnScore1 = prompt(`What is the score of Johns 1st game?`),
    mikeScore1 = prompt(`What is the score of Mikes 1st game?`),
    annaScore1 = prompt(`What is the score of Annas 1st game?`),
    johnScore2 = prompt(`What is the score of Johns 2nd game?`),
    mikeScore2 = prompt(`What is the score of Mikes 2nd game?`),
    annaScore2 = prompt(`What is the score of Annas 2nd game?`),
    johnScore3 = prompt(`What is the score of Johns 3rd game?`),
    mikeScore3 = prompt(`What is the score of Mikes 3rd game?`),
    annaScore3 = prompt(`What is the score of Annas 3rd game?`),
    johnsTeam = (Number(johnScore1) + Number(johnScore2) + Number(johnScore3)) / 3,
    mikesTeam = (Number(mikeScore1) + Number(mikeScore2) + Number(mikeScore3)) / 3,
    annasTeam = (Number(annaScore1) + Number(annaScore2) + Number(annaScore3)) / 3;

switch (true) {
    case johnsTeam > mikesTeam && johnsTeam > annasTeam:
        console.log(`John's team wins with ${johnsTeam} points`);
        break;
    case mikesTeam > johnsTeam && mikesTeam > annasTeam:
        console.log(`Mike's team wins with ${mikesTeam} points.`);
        break;
    case annasTeam > johnsTeam && annasTeam > mikesTeam:
        console.log(`Anna's team wins with ${annasTeam} points.`);
    case annasTeam === johnsTeam && johnsTeam === mikesTeam:
        console.log(`There has been a tie.`);
};
