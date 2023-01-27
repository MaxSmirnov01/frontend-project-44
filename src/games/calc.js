import generalGameLogic from '../index.js';
import { getRandomIntNum, getRandomOperator } from '../random.js';

const gameQuestion = 'What is the result of the expression?';

const gameTask = () => {
  const number1 = getRandomIntNum();
  const number2 = getRandomIntNum();
  const sign = getRandomOperator();
  const question = `${number1} ${sign} ${number2}`;
  let result = 0;
  switch (sign) {
    case '+':
      result = number1 + number2;
      break;
    case '-':
      result = number1 - number2;
      break;
    case '*':
      result = number1 * number2;
      break;
    default:
      return null;
  }
  return [question, String(result)];
};

const gameCalc = () => generalGameLogic(gameQuestion, gameTask);

export default gameCalc;
