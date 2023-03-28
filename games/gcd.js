import { sayWelcome, getUserName, sayHello } from '../src/cli.js';
import {
  showExercise,
  getUserAnswer,
  compareAnswers,
  sayCorrect,
  failFinish,
  successFinish,
} from '../src/index.js';

const startGameGcd = (roundsCount) => {
  let countCorrectAnswers = 0;

  sayWelcome();
  const userName = getUserName();
  sayHello(userName);

  console.log('Find the greatest common divisor of given numbers.');

  for (; countCorrectAnswers < roundsCount; countCorrectAnswers += 1) {
    const firstRandomNumber = Math.floor(Math.random() * 100);
    const secondRandomNumber = Math.floor(Math.random() * 100);
    const expression = `${firstRandomNumber} ${secondRandomNumber}`;

    let minNumber = firstRandomNumber < secondRandomNumber
      ? firstRandomNumber : secondRandomNumber;

    let correctAnswer;
    for (; minNumber > 0; minNumber -= 1) {
      if (firstRandomNumber % minNumber === 0 && secondRandomNumber % minNumber === 0) {
        correctAnswer = minNumber.toString();
        break;
      }
    }

    showExercise(expression);
    const userAnswer = getUserAnswer();
    const isCorrectAnswer = compareAnswers(correctAnswer, userAnswer);

    if (!isCorrectAnswer) {
      failFinish(correctAnswer, userAnswer);
      break;
    }

    sayCorrect();
  }

  successFinish(countCorrectAnswers, roundsCount, userName);
};

export default startGameGcd;
