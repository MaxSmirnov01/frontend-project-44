import getRandomInRange from '../random.js';
import generalGameLogic from '../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateRound = () => {
  const question = getRandomInRange(0, 100);
  let correctAnswer = '';
  if (question % 2 === 0) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  return [question, correctAnswer];
};

const runEvenGame = () => generalGameLogic(rules, generateRound);

export default runEvenGame;
