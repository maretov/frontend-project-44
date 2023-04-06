import readlineSync from 'readline-sync';

const sayWelcome = () => {
  console.log('Welcome to the Brain Games!');
};

const getUserName = () => {
  const userName = readlineSync.question('May I have your name? ');
  return userName;
};

const sayHello = (userName) => {
  console.log(`Hello, ${userName}!`);
};

export { sayWelcome, getUserName, sayHello };
