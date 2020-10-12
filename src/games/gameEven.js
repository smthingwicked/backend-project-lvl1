import random from 'lodash/random.js';
import runBrainGame from '../index.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const genQuestionAnswer = () => {
  const question = random(1, 20);
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  return { question, correctAnswer };
};

export default () => {
  runBrainGame(genQuestionAnswer, rule);
};
