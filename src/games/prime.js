import startGame from '../index.js';

const instruction = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const generateRoundData = () => {
  const randomNumber = Math.floor(Math.random() * 100 + 3);

  let correctAnswer = 'yes';
  for (let i = randomNumber - 1; i > 1; i -= 1) {
    if (randomNumber % i === 0) {
      correctAnswer = 'no';
    }
  }

  return [randomNumber, correctAnswer];
};

const startGamePrime = () => startGame(instruction, generateRoundData);

export default startGamePrime;
