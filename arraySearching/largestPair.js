// Largest Pair
// Have the function LargestPair(num) take the num parameter being passed and determine the largest double digit number within the whole number. For example: if num is 4759472 then your program should return 94 because that is the largest double digit number. The input will always contain at least two positive digits.
// Examples
// Input: 453857
// Output: 85
// Input: 363223311
// Output: 63
// Tags
// math fundamentalssearching
function LargestPair(num) {
  const arr = num.toString().split("");
  let max = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    let composed = arr[i] + arr[i + 1];
    if (Number(composed) > max) max = Number(composed);
  }

  return max;
}

console.log(LargestPair(readline()));

// top rated answer
function LargestPair(num) {
  // code goes here
  var s = "" + num;
  var nums = [];
  for (var i = 1; i < s.length; i++) {
    nums.push(Number(s[i - 1] + s[i]));
  }
  return Math.max(...nums);
}

// keep this function call here
LargestPair(readline());
