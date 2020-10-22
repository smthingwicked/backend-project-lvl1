import random from 'lodash/random.js';
import runBrainGame from '../index.js';

const rule = 'What number is missing in the progression?';

const progressionLength = 10;

const makeProgression = (start, step) => {
  const progression = [start];

  for (let i = 1; i < progressionLength; i += 1) {
    const nextNumOfProgr = progression[i - 1] + step;
    progression.push(nextNumOfProgr);
  }

  return progression;
};

const genQuestionAnswer = () => {
  const start = random(1, 50);
  const step = random(1, 5);
  const hiddenMemberIndex = random(0, progressionLength - 1);

  const progression = makeProgression(start, step);
  const hiddenMember = progression[hiddenMemberIndex];
  progression.splice(hiddenMemberIndex, 1, '..');

  const question = progression.join(' ');
  const correctAnswer = hiddenMember.toString();

  return { question, correctAnswer };
};

export default () => {
  runBrainGame(genQuestionAnswer, rule);
};
