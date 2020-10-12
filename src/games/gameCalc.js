import random from 'lodash/random.js';
import runBrainGame from '../index.js';

const rule = 'What is the result of the expression?';

const operations = {
  '+': (x, y) => x + y,
  '-': (x, y) => x - y,
  '*': (x, y) => x * y,
};

const operationsArr = Object.keys(operations);

const getOperator = (index) => operationsArr[index];

const getExpression = (operator) => operations[operator];

const makeAnswer = (operand1, operand2, operator) => {
  const expression = getExpression(operator);

  return expression(operand1, operand2);
};

const genQuestionAnswer = () => {
  const operand1 = random(1, 10);
  const operand2 = random(1, 10);
  const operator = getOperator(random(0, operationsArr.length - 1));

  const question = `${operand1} ${operator} ${operand2}`;
  const correctAnswer = makeAnswer(operand1, operand2, operator).toString();

  return { question, correctAnswer };
};

export default () => {
  runBrainGame(genQuestionAnswer, rule);
};
