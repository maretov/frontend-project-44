import startGame from '../index.js';
import getRandomNumber from '../utils.js';

const instruction = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let i = num - 1; i > 1; i -= 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const generateRoundData = () => {
  const num = getRandomNumber(2, 100);
  const correctAnswer = isPrime(num) ? 'yes' : 'no';

  return [num, correctAnswer];
};

const startGamePrime = () => startGame(instruction, generateRoundData);

export default startGamePrime;
