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

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (; countCorrectAnswers < 3; countCorrectAnswers += 1) {
    const randomNumber = Math.floor(Math.random() * 100);

    let correctAnswer;
    if (randomNumber % 2 === 0) {
      correctAnswer = 'yes';
    } else {
      correctAnswer = 'no';
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
