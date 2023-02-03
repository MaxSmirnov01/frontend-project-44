import generalGameLogic from '../index.js';
import getRandomInRange from '../random.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let div = 2; div <= num / 2; div += 1) {
    if (num % div === 0) {
      return false;
    }
  }
  return true;
};

const generateRound = () => {
  const question = getRandomInRange(1, 50);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const runPrimeGame = () => generalGameLogic(rules, generateRound);

export default runPrimeGame;
