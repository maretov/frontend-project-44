#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { getUserName, sayWelcome, sayHello } from '../src/cli.js';

sayWelcome();
const userName = getUserName();
sayHello(userName);

console.log('Answer "yes" if the number is even, otherwise answer "no".');

let countCorrectAnswers = 0;
for (; countCorrectAnswers < 3; countCorrectAnswers += 1) {
  const randomNumber = Math.floor(Math.random() * 100);

  let correctAnswer;
  if (randomNumber % 2 === 0) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }

  const userAnswer = readlineSync.question(`Question: ${randomNumber}\nYour answer: `);

  if (userAnswer !== correctAnswer) {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer is '${correctAnswer}'.`);
    console.log(`Let's try again, ${userName}`);
    break;
  }

  console.log('Correct!');
}

if (countCorrectAnswers === 3) {
  console.log(`Congradulations, ${userName}!`);
}
