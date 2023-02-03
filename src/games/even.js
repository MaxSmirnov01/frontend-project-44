import getRandomInRange from '../random.js';
import generalGameLogic from '../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const generateRound = () => {
  const question = getRandomInRange(0, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const runEvenGame = () => generalGameLogic(rules, generateRound);

export default runEvenGame;
