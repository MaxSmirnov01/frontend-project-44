import generalGameLogic from '../index.js';
import getRandomInRange from '../random.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const generateRound = () => {
  const question = getRandomInRange(1, 50);
  let correctAnswer = '';
  if (question === 1) {
    correctAnswer = 'no';
  }
  if (question === 2) {
    correctAnswer = 'yes';
  } else {
    for (let div = 2; div < question; div += 1) {
      if (question % div === 0) {
        correctAnswer = 'no';
        break;
      } else {
        correctAnswer = 'yes';
      }
    }
  }
  return [question, correctAnswer];
};

const runPrimeGame = () => generalGameLogic(rules, generateRound);

export default runPrimeGame;
