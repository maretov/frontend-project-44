import { sayWelcome, getUserName, sayHello } from "../src/cli.js";
import { showExpression, getUserAnswer, compareAnswers, failFinish, sayCorrect, successFinish } from "../src/index.js";

const startGameCalc = (roundsCount) => {
  let countCorrectAnswers = 0;

  sayWelcome();
  const userName = getUserName();
  sayHello(userName);

  console.log('What is the result of the expression?');

  const operators = ['+', '-', '*'];
  for (; countCorrectAnswers < roundsCount; countCorrectAnswers += 1) {
    const firstRandomNumber = Math.floor(Math.random() * 10);
    const secondRandomNumber = Math.floor(Math.random() * 10);
    const expression = `${firstRandomNumber} ${operators[countCorrectAnswers]} ${secondRandomNumber}`;

    let correctAnswer;
    switch (operators[countCorrectAnswers]) {
      case '+':
        correctAnswer = firstRandomNumber + secondRandomNumber;
        break;
      case '-':
        correctAnswer = firstRandomNumber - secondRandomNumber;
        break;
      case '*':
        correctAnswer = firstRandomNumber * secondRandomNumber;
        break;
      default:
        break;
    }

    showExercise(expression);
    const userAnswer = +getUserAnswer();
    const isCorrectAnswer = compareAnswers(correctAnswer, userAnswer);

    if (!isCorrectAnswer) {
      failFinish(correctAnswer, userAnswer);
      break;
    }

    sayCorrect();
  }

  successFinish(countCorrectAnswers, roundsCount, userName);
};

export { startGameCalc };
