import readlineSync from 'readline-sync';

import cheerUser from './cli.js';

const raundCosts = 3;

const brainGame = (pairQuestionAnswer, rule) => {
  console.log('Welcome to the Brain Games!');
  const userName = cheerUser();
  console.log(rule);

  for (let i = 0; i < raundCosts; i += 1) {
    const { question, correctAnswer } = pairQuestionAnswer();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== correctAnswer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};

export default brainGame;
