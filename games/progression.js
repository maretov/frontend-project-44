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

  console.log('What number is missing in the progression?');

  for (; countCorrectAnswers < roundsCount; countCorrectAnswers += 1) {
    const progressionStep = Math.floor(Math.random() * 10 + 3);
    const progression = [];
    progression[0] = Math.floor(Math.random() * 100);

    for (let i = 1; i < 10; i += 1) {
      progression.push(progression[i - 1] + progressionStep);
    }

    const hiddenPosition = Math.floor(Math.random() * 10);
    const correctAnswer = progression[hiddenPosition].toString();
    progression[hiddenPosition] = '..';

    const expression = progression.join(' ');

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
