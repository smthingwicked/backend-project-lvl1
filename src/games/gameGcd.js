import random from 'lodash/random.js';
import brainGame from '../index.js';

const evenRule = 'Find the greatest common divisor of given numbers.';

const findGcd = (operand1, operand2) => {
  if (operand2 > 0) {
    const n = operand1 % operand2;
    return findGcd(operand2, n);
  }
  return Math.abs(operand1);
};

const pairQuestionAnswer = () => {
  const operand1 = random(1, 10);
  const operand2 = random(1, 10);

  const question = `${operand1} ${operand2}`;
  const correctAnswer = findGcd(operand1, operand2).toString();

  return { question, correctAnswer };
};

export default () => {
  brainGame(pairQuestionAnswer, evenRule);
};
