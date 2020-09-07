import random from 'lodash/random.js';
import brainGame from '../index.js';

const evenRule = 'What is the result of the expression?';

const pairQuestionAnswer = () => {
  const question = random(1, 20);
  const correctAnswer = question % 2 === 0 ? 'yes' : 'no';

  return { question, correctAnswer };
};

export default () => {
  brainGame(pairQuestionAnswer, evenRule);
};
