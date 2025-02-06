import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

// Function Defination---------------

export function helloworld() {
  return console.log("helloworld");
}

// --------------------------------------

export function addition(val1, val2) {
  let result = val1 + val2;
  return console.log(`your addition result ${result}`);
}

//--------------------------------------

export function subtraction(val1, val2) {
  let result = val1 - val2;
  return console.log(`your subtraction result ${result}`);
}

//--------------------------------------

export function sayhello(name, day) {
  return console.log(`hello ${name} have a great ${day}...`);
}

//Function Defination with readline---------------------------

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

export function getinfoandsayhello() {
  rl.question("give name please", (name) => {
    rl.question("give city name", (city) => {
      rl.question("give name of the day", (day) => {
        console.log(
          `hello ${name} from ${city} have great and reproductive ${day}...`
        );
        rl.close();
      });
    });
  });
}

//-----------------------------------------------------------

// export async function getinfoasynchronously() {
//   try {
//     let name = await rl.question("what is your name...");
//     let city = await rl.question("what is your city...");
//     let day = await rl.question("what is the day...");

//     console.log(`hello ${name} from ${city} have a great ${day}. . .`);
//   } catch (error) {
//     console.log(`the following error occured...${error}`);
//   } finally {
//     rl.close();
//   }
// }

const rla = readline.createInterface({ input, output });

export async function getinfoasynchronously() {
  try {
    let name = await rla.question("What is your name? ");
    let city = await rla.question("What is your city? ");
    let day = await rla.question("What is the day? ");

    console.log(`Hello ${name} from ${city}, have a great ${day}!`);
  } catch (error) {
    console.log(`An error occurred: ${error}`);
  } finally {
    rl.close(); // Ensure readline is closed properly
  }
}
