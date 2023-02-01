const getRandomInRange = (min = 0, max = 10) => {
  const randomNum = Math.floor(min + Math.random() * (max - min + 1));
  return randomNum;
};

export default getRandomInRange;
