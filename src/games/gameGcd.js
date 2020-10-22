import random from 'lodash/random.js';
import runBrainGame from '../index.js';

const rule = 'Find the greatest common divisor of given numbers.';

const findGcd = (num1, num2) => {
  if (num2 !== 0) {
    const n = num1 % num2;
    return findGcd(num2, n);
  }
  return Math.abs(num1);
};

const genQuestionAnswer = () => {
  const operand1 = random(1, 10);
  const operand2 = random(-10, 10);

  const question = `${operand1} ${operand2}`;
  const correctAnswer = findGcd(operand1, operand2).toString();

  return { question, correctAnswer };
};

export default () => {
  runBrainGame(genQuestionAnswer, rule);
};
