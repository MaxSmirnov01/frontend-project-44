import generalGameLogic from '../index.js';
import { getRandomIntNum } from '../random.js';

const gameQuestion = 'Find the greatest common divisor of given numbers.';

const gameTask = () => {
  const number1 = getRandomIntNum();
  const number2 = getRandomIntNum();
  const question = `${number1} ${number2}`;
  let result = 0;
  const min = number1 < number2 ? number1 : number2;
  const max = number1 > number2 ? number1 : number2;
  for (let i = 1; i < max; i += 1) {
    if (min % i === 0 && max % i === 0) {
      result = i;
    }
  }
  return [question, String(result)];
};

const gameGcd = () => generalGameLogic(gameQuestion, gameTask);

export default gameGcd;
