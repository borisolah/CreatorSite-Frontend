const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function introQuestion() {
  return new Promise((resolve, reject) => {
    rl.question("Do you want to start? ", (answer) => {
      if (answer.toLowerCase() === "yes") {
        console.log("Its your turn.Please pick a square to place your X");
        resolve(true);
      } else if (answer.toLowerCase() === "no") {
        console.log("Then fuck off");
      }
    });
  });
}

introQuestion();
