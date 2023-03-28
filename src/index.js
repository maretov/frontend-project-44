import readlineSync from 'readline-sync';

const showExpression = (expression) => {
  console.log(`Question: ${expression}`);
};

const getUserAnswer = () => {
  const userAnswer = readlineSync.question('Your answer: ');
  return userAnswer;
};

const compareAnswers = (correctAnswer, userAnswer) => correctAnswer === +userAnswer;

const failFinish = (correctAnswer, userAnswer) => {
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer is '${correctAnswer}'.`);
};

const sayCorrect = () => {
  console.log('Correct!');
}

const successFinish = (countCorrectAnswers, roundsCount, userName) => {
  if (countCorrectAnswers === roundsCount) {
    console.log(`Congradulations, ${userName}!`);
  } else {
    console.log(`Let's try again, ${userName}`);
  }
};

export { showExpression, getUserAnswer, compareAnswers, failFinish, sayCorrect, successFinish };
