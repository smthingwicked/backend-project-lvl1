import random from 'lodash/random.js';
import brainGame from '../index.js';

const evenRule = 'Answer "yes" if the number is even, otherwise answer "no".';

const pairQuestionAnswer = () => {
  const question = random(1, 20);
  const correctAnswer = question % 2 === 0 ? 'yes' : 'no';

  return { question, correctAnswer };
};

export default () => {
  brainGame(pairQuestionAnswer, evenRule);
};
