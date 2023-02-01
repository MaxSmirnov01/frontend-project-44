import generalGameLogic from '../index.js';
import getRandomInRange from '../random.js';

const rules = 'What is the result of the expression?';

const getRandomOperator = () => {
  const oper = ['+', '-', '*'];
  const random = Math.floor(Math.random() * oper.length);
  const sign = oper[random];
  return sign;
};

const generateRound = () => {
  const number1 = getRandomInRange(0, 50);
  const number2 = getRandomInRange(0, 50);
  const sign = getRandomOperator();
  const question = `${number1} ${sign} ${number2}`;
  let correctAnswer = 0;
  switch (sign) {
    case '+':
      correctAnswer = number1 + number2;
      break;
    case '-':
      correctAnswer = number1 - number2;
      break;
    case '*':
      correctAnswer = number1 * number2;
      break;
    default:
      return null;
  }
  return [question, String(correctAnswer)];
};

const runCalcGame = () => generalGameLogic(rules, generateRound);

export default runCalcGame;
