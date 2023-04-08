import startGame from '../index.js';
import getRandomNumber from '../utils.js';

const instruction = 'Find the greatest common divisor of given numbers.';

const getGreatestCommonDivisor = (firstNum, secondNum) => {
  let divisor = firstNum < secondNum ? firstNum : secondNum;

  for (; divisor > 0; divisor -= 1) {
    if (firstNum % divisor === 0 && secondNum % divisor === 0) {
      break;
    }
  }

  return divisor;
};

const generateRoundData = () => {
  const firstNum = getRandomNumber(1, 100);
  const secondNum = getRandomNumber(1, 100);

  const expression = `${firstNum} ${secondNum}`;
  const correctAnswer = String(getGreatestCommonDivisor(firstNum, secondNum));

  return [expression, correctAnswer];
};

const startGameGcd = () => startGame(instruction, generateRoundData);

export default startGameGcd;
