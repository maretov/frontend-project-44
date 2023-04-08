import startGame from '../index.js';
import getRandomNumber from '../utils.js';

const instruction = 'What is the result of the expression?';

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * operators.length);
  return operators[randomIndex];
};

const calcExpression = (firstNum, secondNum, operator) => {
  switch (operator) {
    case '+':
      return firstNum + secondNum;
    case '-':
      return firstNum - secondNum;
    case '*':
      return firstNum * secondNum;
    default:
      throw new Error(`Unknown operator: '${operator}'!`);
  }
};

const generateRoundData = () => {
  const firstNum = getRandomNumber(1, 100);
  const secondNum = getRandomNumber(1, 100);
  const operator = getRandomOperator();

  const question = `${firstNum} ${operator} ${secondNum}`;
  const correctAnswer = calcExpression(firstNum, secondNum, operator).toString();

  return [question, correctAnswer];
};

const startGameCalc = () => startGame(instruction, generateRoundData);

export default startGameCalc;
