import startGame from '../index.js';

const instruction = 'What is the result of the expression?';

const generateRoundData = (roundNumber) => {
  const operators = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * operators.length);
  const firstRandomNumber = Math.floor(Math.random() * 10);
  const secondRandomNumber = Math.floor(Math.random() * 10);
  const question = `${firstRandomNumber} ${operators[randomIndex]} ${secondRandomNumber}`;

  let correctAnswer;
  switch (operators[randomIndex]) {
    case '+':
      correctAnswer = firstRandomNumber + secondRandomNumber;
      break;
    case '-':
      correctAnswer = firstRandomNumber - secondRandomNumber;
      break;
    case '*':
      correctAnswer = firstRandomNumber * secondRandomNumber;
      break;
    default:
      console.log(`Error! Swith expession is '${operators[roundNumber]}'`);
  }
  correctAnswer = correctAnswer.toString();

  return [question, correctAnswer];
};

const startGameCalc = () => startGame(instruction, generateRoundData);

export default startGameCalc;
