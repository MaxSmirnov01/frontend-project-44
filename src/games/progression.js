import generalGameLogic from '../index.js';
import getRandomInRange from '../random.js';

const rules = 'What number is missing in the progression?';

const getProgression = (progressionStart, progressionStep, progressionLength) => {
  const prog = [progressionStart];
  for (let i = 1; i < progressionLength; i += 1) {
    prog.push(progressionStart + progressionStep * i);
  }
  return prog;
};

const generateRound = () => {
  const step = getRandomInRange(1, 10);
  const number1 = getRandomInRange(0, 20);
  const progressionLength = getRandomInRange(5, 10);
  const hiddenIndex = getRandomInRange(1, progressionLength - 1);
  const progression = getProgression(number1, step, progressionLength);
  const correctAnswer = String(progression[hiddenIndex]);
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');

  return [question, correctAnswer];
};

const runProgressionGame = () => generalGameLogic(rules, generateRound);

export default runProgressionGame;
