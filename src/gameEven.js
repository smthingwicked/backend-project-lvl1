import readlineSync from 'readline-sync';
import cheerUser from './cli.js';

console.log('Welcome to the Brain Games!');

const userName = cheerUser();

console.log('Answer "yes" if the number is even, otherwise answer "no".');

const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

const raundCosts = 3;

export default () => {
  for (let i = 0; i < raundCosts; i += 1) {
    const randomNum = getRandomInt(20);
    console.log(`Question: ${randomNum}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = randomNum % 2 === 0 ? 'yes' : 'no';

    if (userAnswer !== correctAnswer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};
