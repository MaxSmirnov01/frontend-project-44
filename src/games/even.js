import readlineSync from 'readline-sync';

const getRandomInt = () => {
  const min = Math.ceil(0);
  const max = Math.floor(100);
  const number = Math.floor(Math.random() * (max - min)) + min;
  return number;
};

const gameEven = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const numRandom = getRandomInt();
    console.log(`Question: ${numRandom}`);
    const answer = readlineSync.question('Your answer: ');
    if ((numRandom % 2 === 0 && answer === 'yes') || (numRandom % 2 !== 0 && answer === 'no')) {
      console.log('Correct!');
    } else if (answer === 'yes') {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default gameEven;
