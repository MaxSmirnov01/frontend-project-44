import generalGameLogic from '../index.js';
import { getRandomIntNum } from '../random.js';

const gameQuestion = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const gameTask = () => {
  const question = getRandomIntNum();
  let result = '';
  if (question === 1) {
    result = 'no';
  }
  if (question === 2) {
    result = 'yes';
  } else {
    for (let div = 2; div < question; div += 1) {
      if (question % div === 0) {
        result = 'no';
        break;
      } else {
        result = 'yes';
      }
    }
  }
  return [question, result];
};

const gamePrime = () => generalGameLogic(gameQuestion, gameTask);

export default gamePrime;
