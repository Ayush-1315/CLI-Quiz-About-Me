//Initializations
var readLineSync = require('readline-sync');
//Questions
var questions = [
  {
    question: "Where do Ayush live? \n a) Chandigarh \n b) Bangalore \n c) Delhi \n d)Patna                  \n",
    ans: 'd',
  },
  {
    question: "What do Ayush do? \n a) Singer \n b) Web Developer \n c) Software Engineer \n d) Data Analyst \n",
    ans: 'b',
  },
  {
    question: "What does he like most ? \n a) Singing \n b) Dancing \n c) Sketching \n d)Sleeping \n",
    ans: 'c',
  },
  {
    question: "In which month Ayush's birthday falls? \n a) January \n b) December \n c) March  \n d)August \n",
    ans: 'd',
  },
  {
    question: "Do he helps you whenever you need? \n a) yes \n b) no \n",
    ans: 'a',
  }
];
//Functions
function welcome(name) {
  console.log("Welcome " + name + " ,let's see how much you know about Ayush....");
  console.log("\n\n\t\t\t\tSTARTING GAME IN 5 Secs.......");
  setTimeout(start, 5000);
}
function askquestion(question, answer) {
  let userAns = readLineSync.question("Question: \n" + question);
  if (userAns.toUpperCase() === answer.toUpperCase()) {
    score++;
    console.log('Right!');
  }
  else {
    console.log('Wrong!');
  }
  console.log("Current Score: " + score);
  console.log("____________________");
}
function start() {
  for (var i = 0; i < questions.length; i++) {
    let currentQuestion = questions[i];
    askquestion(currentQuestion.question, currentQuestion.ans);
  }
  console.log("Your Score: " + score);
  highScores.push({
    name: username,
    score: score,
  });
  let showLeader = readLineSync.question("Want to see leaderboard?? (Y/N) \n");
  if (showLeader.toUpperCase() === 'Y') {
    showLeaderboards();
  }
  console.log("\t\t\t\tThanks for playing with me......☺☺☺☺")
}
function showLeaderboards() {
  console.log("\t\t\t\t\t LEADERBOARDS\n");
  for (let i = 0; i < highScores.length; i++) {
    let player = highScores[i];
    console.log(player.name);
    console.log("Score: " + player.score);
    console.log("-----------------");
  }
}
//Leaderboards
var highScores = [
  {
    name: 'Amandeep',
    score: 3,
  },
  {
    name: 'Piyush Alankar',
    score: 5,
  },
  {
    name: 'Maddy',
    score: 2,
  }
];
//User Details
var score = 0;
var username = readLineSync.question("What's your name?");
welcome(username);