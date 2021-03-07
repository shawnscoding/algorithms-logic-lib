const getSecLowest = (sortedArr) => {
  let secLowest;
  for (let i = 0; i < sortedArr.length; i++) {
    if (i === 0) {
      secLowest = sortedArr[i];
    } else if (secLowest < sortedArr[i]) {
      return sortedArr[i];
    }
  }
  return secLowest;
};

const getSecGreatest = (sortedArr) => {
  let secGreatest;
  for (let i = sortedArr.length - 1; i >= 0; i--) {
    if (i === sortedArr.length - 1) {
      secGreatest = sortedArr[i];
    } else if (secGreatest > sortedArr[i]) {
      return sortedArr[i];
    }
  }
  return secGreatest;
};

function SecondGreatLow(arr) {
  // will not be empty and will contain at least 2 numbers.
  let sortedArr = arr.sort((a, b) => a - b);
  let secLowest = getSecLowest(sortedArr);
  let secGratest = getSecGreatest(sortedArr);

  // code goes here
  return `${secLowest} ${secGratest}`;
}

// keep this function call here
console.log(SecondGreatLow(readline()));
