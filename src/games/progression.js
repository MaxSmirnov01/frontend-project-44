import generalGameLogic from '../index.js';
import getRandomInRange from '../random.js';

const rules = 'What number is missing in the progression?';

const getProgression = (progressionStart, progressionStep) => {
  const prog = [progressionStart];
  for (let i = 1; i < 10; i += 1) {
    prog.push(progressionStart + progressionStep * i);
  }
  return prog;
};

const getNewProgression = (prog, hiddenItem) => {
  const newProgression = prog.slice(0);
  const resultArr = [];
  for (let i = 0; i < newProgression.length; i += 1) {
    if (i !== hiddenItem) {
      resultArr.push(newProgression[i]);
    } else {
      resultArr.push('..');
    }
  }
  return resultArr;
};

const generateRound = () => {
  const step = getRandomInRange(1, 10);
  const number1 = getRandomInRange(0, 20);
  const hiddenNumber = getRandomInRange(1, 9);
  const progression = getProgression(number1, step);
  const question = getNewProgression(progression, hiddenNumber);
  let correctAnswer = 0;
  for (let i = 0; i < question.length; i += 1) {
    if (question[i] === '..') {
      correctAnswer = number1 + step * hiddenNumber;
      break;
    }
  }
  return [question.join(' '), String(correctAnswer)];
};

const runProgressionGame = () => generalGameLogic(rules, generateRound);

export default runProgressionGame;
