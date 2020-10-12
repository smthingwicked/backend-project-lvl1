import random from 'lodash/random.js';
import runBrainGame from '../index.js';

const rule = 'What number is missing in the progression?';

const makeProgression = (startNum, differenceNum) => {
  const progression = [startNum];

  for (let i = 1; i <= 10; i += 1) {
    const nextNumOfProgr = progression[i - 1] + differenceNum;
    progression.push(nextNumOfProgr);
  }

  return progression;
};

const hideNum = (progression) => {
  const hideIdx = random(0, 9);
  progression.splice(hideIdx, 1, '..');

  return progression;
};

const findMissing = (progression, differenceNum) => {
  let i = 0;
  while (progression[i] !== '..') {
    i += 1;
  }
  if (i === 0) {
    return progression[i + 1] - differenceNum;
  }
  return progression[i - 1] + differenceNum;
};

const genQuestionAnswer = () => {
  const startNum = random(1, 50);
  const differenceNum = random(1, 5);
  const progression = hideNum(makeProgression(startNum, differenceNum));

  const question = progression.join(' ');
  const correctAnswer = findMissing(progression, differenceNum).toString();

  return { question, correctAnswer };
};

export default () => {
  runBrainGame(genQuestionAnswer, rule);
};
