import generalGameLogic from '../index.js';
import getRandomInRange from '../random.js';

const rules = 'Find the greatest common divisor of given numbers.';

const generateRound = () => {
  const number1 = getRandomInRange(0, 50);
  const number2 = getRandomInRange(0, 50);
  const question = `${number1} ${number2}`;
  let correctAnswer = 0;
  const min = number1 < number2 ? number1 : number2;
  const max = number1 > number2 ? number1 : number2;
  for (let i = 1; i < max; i += 1) {
    if (min % i === 0 && max % i === 0) {
      correctAnswer = i;
    }
  }
  return [question, String(correctAnswer)];
};

const runGcdGame = () => generalGameLogic(rules, generateRound);

export default runGcdGame;
