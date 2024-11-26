const fibs = (number) => {
  if (number <= 0) {
    return [];
  } else if (number === 1) {
    return [0];
  }

  let result = [0, 1];
  for (let index = 2; index < number; index++) {
    result.push(result[index - 1] + result[index - 2]);
  }

  return result;
};

const fibsRec = (number) => {
  if (number <= 0) {
    return [];
  } else if (number === 1) {
    return [0];
  } else if (number === 2) {
    return [0, 1];
  } else if (number > 2) {
    const subFibs = fibsRec(number - 1);
    subFibs.push(subFibs.at(-1) + subFibs.at(-2));
    return subFibs;
  }
};

console.log(fibs(8));
console.log(fibsRec(8));
