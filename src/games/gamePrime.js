import random from 'lodash/random.js';
import brainGame from '../index.js';

const evenRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num === 1) {
    return 'yes';
  }

  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const pairQuestionAnswer = () => {
  const question = random(1, 20);
  const correctAnswer = isPrime(question).toString();

  return { question, correctAnswer };
};

export default () => {
  brainGame(pairQuestionAnswer, evenRule);
};
