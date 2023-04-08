import startGame from '../index.js';
import getRandomNumber from '../utils.js';

const instruction = 'What number is missing in the progression?';

const getProgression = (length) => {
  const progressionStep = getRandomNumber(5, 20);
  const progression = [];
  progression[0] = getRandomNumber(1, 100);

  for (let i = 1; i < length; i += 1) {
    progression.push(progression[i - 1] + progressionStep);
  }

  return progression;
};

const generateRoundData = () => {
  const progressionLength = 10;
  const hiddenPosition = getRandomNumber(0, progressionLength);

  const progression = getProgression(progressionLength);

  const correctAnswer = progression[hiddenPosition].toString();
  progression[hiddenPosition] = '..';

  const expression = progression.join(' ');

  return [expression, correctAnswer];
};

const startGameProgression = () => startGame(instruction, generateRoundData);

export default startGameProgression;
