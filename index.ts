#! /src/bin/env node

import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random() * 10 + 1);

const answer = await inquirer.prompt([
  {
    name: "userGuessedNumber",
    type: "number",
    message: "Please Guess a Number between 1-10",
  },
]);
if (answer.userGuessedNumber === randomNumber) {
  console.log("Congratulations,You Guess a Right Number");
} else {
  console.log("You Guess a Wrong Number, Try Again.");
}
