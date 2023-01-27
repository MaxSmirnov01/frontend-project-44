export const getRandomIntNum = () => {
  const min = Math.ceil(1);
  const max = Math.floor(20);
  const number = Math.floor(Math.random() * (max - min)) + min;
  return number;
};

export const getRandomOperator = () => {
  const oper = ['+', '-', '*'];
  const random = Math.floor(Math.random() * oper.length);
  const sign = oper[random];
  return sign;
};
