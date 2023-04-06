import startGame from '../index.js';

const instruction = 'What number is missing in the progression?';

const generateRoundData = (roundNumber) => { // eslint-disable-line no-unused-vars
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

  return [expression, correctAnswer];
};

const startGameProgression = () => startGame(instruction, generateRoundData);

export default startGameProgression;
