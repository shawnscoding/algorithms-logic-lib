// sameFrequency
// write a function called sameFrequency. given two positive integers. find out if the two numbers have the same frequency of digits.
// your solution must have the following complexities: TIME: O(N)

// 1
// 2
// 3
// - convert it to sring
// use two for loop
// assign num1 to obj
// compare  with num2 in second loop
//4

const sameFrequency = (num1, num2) => {
  const obj = {};
  const strNum1 = num1.toString();
  const strNum2 = num2.toString();
  for (let i = 0; i < strNum1.length; i++) {
    if (obj[strNum1[i]]) {
      obj[strNum1[i]]++;
    } else {
      obj[strNum1[i]] = 1;
    }
  }

  for (let i = 0; i < strNum2.length; i++) {
    if (!(strNum2[i] in obj)) {
      return false;
    } else {
      obj[strNum2[i]]--;
    }

    if (obj[strNum2[i]] < 0) {
      return false;
    }
  }

  return true;
};

//5
function sameFrequency(num1, num2) {
  let strNum1 = num1.toString();
  let strNum2 = num2.toString();
  if (strNum1.length !== strNum2.length) return false;

  let countNum1 = {};
  let countNum2 = {};

  for (let i = 0; i < strNum1.length; i++) {
    countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1;
  }

  for (let j = 0; j < strNum1.length; j++) {
    countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1;
  }

  for (let key in countNum1) {
    if (countNum1[key] !== countNum2[key]) return false;
  }

  return true;
}

console.log(sameFrequency(182, 281));
console.log(sameFrequency(34, 14));
console.log(sameFrequency(3589578, 5879385));
console.log(sameFrequency(22, 222));
