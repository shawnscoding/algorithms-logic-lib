// time complexity :: O(2^n)
// naive approach
// const fib = (n) => {
//   let result;
//   if (n === 1 || n === 2) {
//     result = 1;
//   } else {
//     result = fib(n - 1) + fib(n - 2);
//   }
//   return result;
// };

// console.log(fib(50));

// time complexity :: O(n)
// memoized solution
// const memo = [];
// const fib = (n, _memo) => {
//   let result;

//   if (_memo[n]) {
//     return _memo[n];
//   }
//   if (n === 1 || n === 2) {
//     result = 1;
//   } else {
//     result = fib(n - 1, _memo) + fib(n - 2, _memo);
//     _memo[n] = result;
//   }
//   return result;
// };

// console.log(fib(50, memo));

// bottom-up approach
// time complexity :: O(n)
const fibBottomUp = (n) => {
  const memoArr = [];
  memoArr[1] = 1;
  memoArr[2] = 1;
  for (let i = 3; i <= n; i++) {
    memoArr[i] = memoArr[i - 1] + memoArr[i - 2];
    // 2
    if (i === n) {
      return memoArr[i];
    }
  }
  return memoArr[1];
};
console.log(fibBottomUp(50));



// 2 4 8 16 32
// 1 2 3 4 5