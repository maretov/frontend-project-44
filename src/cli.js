import readlineSync from 'readline-sync';

const getUserName = () => {
  const userName = readlineSync.question('May I have your name? ');
  return userName;
};

const sayWelcome = () => {
  console.log('Welcome to the Brain Games!');
};

const sayHello = (userName) => {
  console.log(`Hello, ${userName}!`);
};

export { getUserName, sayWelcome, sayHello };
