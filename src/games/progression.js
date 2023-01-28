import generalGameLogic from '../index.js';
import { getRandomIntNum, getRandomIntNumUpTo10 } from '../random.js';

const gameQuestion = 'What number is missing in the progression?';

const step = getRandomIntNumUpTo10();

const getProgression = () => {
  const number1 = getRandomIntNum();
  const arrProg = [number1];
  for (let i = 1; i < 10; i += 1) {
    arrProg.push(number1 + step * i);
  }
  return arrProg;
};

const getNewProgression = () => {
  const position = getRandomIntNumUpTo10();
  const newProgression = getProgression();
  const resultArr = [];
  for (let i = 0; i < newProgression.length; i += 1) {
    if (i !== position) {
      resultArr.push(newProgression[i]);
    } else {
      resultArr.push('..');
    }
  }
  return resultArr;
};

const gameTask = () => {
  const question = getNewProgression();
  let result = 0;
  for (let i = 0; i < question.length; i += 1) {
    if (question[i] === '..') {
      result = question[i - 1] + step;
      break;
    }
  }
  return [question.join(' '), String(result)];
};

const gameProgression = () => generalGameLogic(gameQuestion, gameTask);

export default gameProgression;
