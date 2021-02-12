// Two Sum
// Have the function TwoSum(arr) take the array of integers stored in arr, and determine if any two numbers (excluding the first element) in the array can sum up to the first element in the array. For example: if arr is [7, 3, 5, 2, -4, 8, 11], then there are actually two pairs that sum to the number 7: [5, 2] and [-4, 11]. Your program should return all pairs, with the numbers separated by a comma, in the order the first number appears in the array. Pairs should be separated by a space. So for the example above, your program would return: 5,2 -4,11

// If there are no two numbers that sum to the first element in the array, return -1
// Examples
// Input: [17, 4, 5, 6, 10, 11, 4, -3, -5, 3, 15, 2, 7]
// Output: 6,11 10,7 15,2
// Input: [7, 6, 4, 1, 7, -2, 3, 12]
// Output: 6,1 4,3
// Tags
// arraysearching dynamic programminghash table GoogleFacebookAmazon

// same speed but clean code
console.time();
function TwoSum(arr) {
  let target = arr.shift();
  let output = [];
  for (let i = 0; i <= arr.length; i++) {
    let first = arr[i];
    let newArr = [...arr];
    newArr.splice(i, 1);
    if (newArr.indexOf(target - first) !== -1) {
      output.push(`${first},${target - first}`);
      arr[i] = "*";
    }
  }
  if (output.length < 1) {
    return -1;
  }
}

console.log(TwoSum([7, 3, 5, 2, -4, 8, 11]));
console.timeEnd();

// my answer
console.time();
function TwoSum(arr) {
  // shift as target
  // use binary search tree
  // pick midlle, substract it from target, if less search left, if not right
  let sum = arr.shift();
  // keys will be the indexes of first num that added with
  let result = "";
  let memo = {};
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i === j) {
      } else if (memo[`${arr[i]}${arr[j]}`]) {
      } else if (arr[i] + arr[j] === sum) {
        memo[`${arr[j]}${arr[i]}`] = true;
        result += `${arr[i]},${arr[j]} `;
      }
    }
  }
  if (result === "") return -1;
  return result.slice(0, result.length - 1);
}
console.log(TwoSum([7, 3, 5, 2, -4, 8, 11]));
console.timeEnd();
