import readlineSync from 'readline-sync';

const startGame = (instruction, generateRoundData) => {
  const roundsCount = 3;

  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(instruction);

  let correctAnswersCount = 0;
  for (; correctAnswersCount < roundsCount; correctAnswersCount += 1) {
    const roundData = generateRoundData(correctAnswersCount);

    const question = roundData[0];
    const correctAnswer = roundData[1];

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const isCorrectAnswer = correctAnswer === userAnswer;

    if (!isCorrectAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer is '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }

    console.log('Correct!');
  }

  if (correctAnswersCount === roundsCount) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export default startGame;
