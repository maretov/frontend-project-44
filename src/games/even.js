import startGame from '../index.js';
import getRandomNumber from '../utils.js';

const instruction = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const generateRoundData = () => {
  const num = getRandomNumber(1, 100);
  const correctAnswer = isEven(num) ? 'yes' : 'no';

  return [num, correctAnswer];
};

const startGameEven = () => startGame(instruction, generateRoundData);

export default startGameEven;
