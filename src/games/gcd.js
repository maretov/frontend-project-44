import startGame from '../index.js';

const instruction = 'Find the greatest common divisor of given numbers.';

const generateRoundData = () => {
  const firstRandomNumber = Math.floor(Math.random() * 100 + 1);
  const secondRandomNumber = Math.floor(Math.random() * 100 + 1);
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

  return [expression, correctAnswer];
};

const startGameGcd = () => startGame(instruction, generateRoundData);

export default startGameGcd;
