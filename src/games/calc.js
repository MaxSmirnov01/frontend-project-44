import generalGameLogic from '../index.js';
import getRandomInRange from '../random.js';

const rules = 'What is the result of the expression?';

const getRandomOperator = () => {
  const oper = ['+', '-', '*'];
  return oper[getRandomInRange(0, oper.length - 1)];
};

const calculation = (num1, num2, oper) => {
  switch (oper) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Operator ${oper} - is incorrect!`);
  }
};

const generateRound = () => {
  const number1 = getRandomInRange(0, 50);
  const number2 = getRandomInRange(0, 50);
  const oper = getRandomOperator();
  const question = `${number1} ${oper} ${number2}`;
  const correctAnswer = String(calculation(number1, number2, oper));

  return [question, correctAnswer];
};

const runCalcGame = () => generalGameLogic(rules, generateRound);

export default runCalcGame;
