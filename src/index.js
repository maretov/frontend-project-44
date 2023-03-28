import readlineSync from 'readline-sync';

const showExercise = (exercise) => {
  console.log(`Question: ${exercise}`);
};

const getUserAnswer = () => {
  const userAnswer = readlineSync.question('Your answer: ');
  return userAnswer;
};

const compareAnswers = (correctAnswer, userAnswer) => correctAnswer === userAnswer;

const sayCorrect = () => {
  console.log('Correct!');
};

const failFinish = (correctAnswer, userAnswer) => {
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer is '${correctAnswer}'.`);
};

const successFinish = (countCorrectAnswers, roundsCount, userName) => {
  if (countCorrectAnswers === roundsCount) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log(`Let's try again, ${userName}`);
  }
};

export {
  showExercise,
  getUserAnswer,
  compareAnswers,
  sayCorrect,
  failFinish,
  successFinish,
};
