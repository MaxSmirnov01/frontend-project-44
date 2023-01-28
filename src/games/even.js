import { getRandomIntNum } from '../random.js';
import generalGameLogic from '../index.js';

const gameQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';

const gameTask = () => {
  const question = getRandomIntNum();
  let result = '';
  if (question % 2 === 0) {
    result = 'yes';
  } else {
    result = 'no';
  }
  return [question, result];
};

const gameEven = () => generalGameLogic(gameQuestion, gameTask);

export default gameEven;
