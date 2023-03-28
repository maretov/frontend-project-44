import { sayWelcome, getUserName, sayHello } from '../src/cli.js';
import {
  showExercise,
  getUserAnswer,
  compareAnswers,
  sayCorrect,
  failFinish,
  successFinish,
} from '../src/index.js';

const startGameEven = (roundsCount) => {
  let countCorrectAnswers = 0;

  sayWelcome();
  const userName = getUserName();
  sayHello(userName);

  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  for (; countCorrectAnswers < 3; countCorrectAnswers += 1) {
    const randomNumber = Math.floor(Math.random() * 100 + 3);

    let correctAnswer = 'yes';
    for (let i = randomNumber - 1; i > 1; i -= 1) {
      if (randomNumber % i === 0) {
        correctAnswer = 'no';
      }
    }

    showExercise(randomNumber);
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

export default startGameEven;
