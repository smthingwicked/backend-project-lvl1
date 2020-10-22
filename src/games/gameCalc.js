import random from 'lodash/random.js';
import runBrainGame from '../index.js';

const rule = 'What is the result of the expression?';

const operations = {
  '+': (x, y) => x + y,
  '-': (x, y) => x - y,
  '*': (x, y) => x * y,
};

const operators = Object.keys(operations);

const makeAnswer = (operand1, operand2, operator) => {
  const calculate = operations[operator];

  return calculate(operand1, operand2);
};

const genQuestionAnswer = () => {
  const operand1 = random(1, 10);
  const operand2 = random(1, 10);
  const operator = operators[random(0, operators.length - 1)];

  const question = `${operand1} ${operator} ${operand2}`;
  const correctAnswer = makeAnswer(operand1, operand2, operator).toString();

  return { question, correctAnswer };
};

export default () => {
  runBrainGame(genQuestionAnswer, rule);
};
