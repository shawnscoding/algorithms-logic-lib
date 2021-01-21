// number of time to sort, depends on the number of digits.

// function getDigit(num, i) {
//   const str = num.toString();
//   if (str.length < i + 1) {
//     return 0;
//   } else {
//     return Number(str[Math.abs(i - str.length) - 1]);
//   }
// }

function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

// console.log(getDigit(7323, 0)); // 5
// console.log(getDigit(7323, 1)); // 2
// console.log(getDigit(7323, 7)); // 3

// function digitCount(num) {
//   return num.toString().length;
// }

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// console.log(digitCount(7));
// console.log(digitCount(73));
// console.log(digitCount(732));

function mostDigits(arr) {
  let maxDigit = 0;
  for (let i = 0; i < arr.length; i++) {
    maxDigit = Math.max(maxDigit, digitCount(arr[i]));
  }

  return maxDigit;
}

// console.log(mostDigits([2, 1321, 1]));
function radixSort(arr, i, maxDigits) {
  if (i < maxDigits) {
    const bucket = [];
    const newArr = [];

    for (let j = 0; j < arr.length; j++) {
      const numIndigit = getDigit(arr[j], i);

      if (bucket[numIndigit]) {
        bucket[numIndigit].push(arr[j]);
      } else {
        bucket[numIndigit] = [arr[j]];
      }
    }
    bucket.map((item) => newArr.push(...item));
    i++;
    return radixSort(newArr, i, maxDigits);
  } else {
    return arr;
  }
}

const arr = [3, 22, 33, 1, 2, 4, 9, 6, 3];

const maxDigits = mostDigits(arr);
console.log(radixSort(arr, 0, maxDigits));
// solved on my own
// console.log(radixSort([1, 22, 2, 3, 33, 3, 4, 6, 9]));
