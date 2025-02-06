import readline from "node:readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("what is your name", (name) => {
  rl.question("where are you from", (city) => {
    rl.question("what day is it", (day) => {
      console.log(
        `hello ${name} from ${city} have great and productive ${day}`
      );
      rl.close();
    });
  });
});
