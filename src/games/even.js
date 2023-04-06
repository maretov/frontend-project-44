import startGame from '../index.js';

const instruction = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateRoundData = () => {
  const randomNumber = Math.floor(Math.random() * 100);

  let correctAnswer;
  if (randomNumber % 2 === 0) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }

  return [randomNumber, correctAnswer];
};

const startGameEven = () => startGame(instruction, generateRoundData);

export default startGameEven;
