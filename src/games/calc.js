import generalGameLogic from '../index.js';
import getRandomInRange from '../random.js';

const rules = 'What is the result of the expression?';

const getRandomOperator = () => {
  const oper = ['+', '-', '*'];
  return oper[getRandomInRange(0, oper.length - 1)];
};

const calculation = (num1, num2, oper) => {
  let correctAnswer = 0;
  switch (oper) {
    case '+':
      correctAnswer = num1 + num2;
      break;
    case '-':
      correctAnswer = num1 - num2;
      break;
    case '*':
      correctAnswer = num1 * num2;
      break;
    default:
      throw new Error(`Operator ${oper} - is incorrect!`);
  }
  return correctAnswer;
};

const generateRound = () => {
  const number1 = getRandomInRange(0, 50);
  const number2 = getRandomInRange(0, 50);
  const oper = getRandomOperator();
  const question = `${number1} ${oper} ${number2}`;
  const correctAnswer = calculation(number1, number2, oper);

  return [question, String(correctAnswer)];
};

const runCalcGame = () => generalGameLogic(rules, generateRound);

export default runCalcGame;
