import generalGameLogic from '../index.js';
import getRandomInRange from '../random.js';

const rules = 'Find the greatest common divisor of given numbers.';

const getGcd = (num1, num2) => {
  if (num1 === 0) {
    return num2;
  }
  return getGcd(num2 % num1, num1);
};

const generateRound = () => {
  const number1 = getRandomInRange(0, 50);
  const number2 = getRandomInRange(0, 50);
  const question = `${number1} ${number2}`;
  const correctAnswer = getGcd(number1, number2);

  return [question, String(correctAnswer)];
};

const runGcdGame = () => generalGameLogic(rules, generateRound);

export default runGcdGame;
