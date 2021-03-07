// Sum Multiplier
// Have the function SumMultiplier(arr) take the array of numbers stored in arr and return the string true if any two numbers can be multiplied so that the answer is greater than double the sum of all the elements in the array. If not, return the string false. For example: if arr is [2, 5, 6, -6, 16, 2, 3, 6, 5, 3] then the sum of all these elements is 42 and doubling it is 84. There are two elements in the array, 16 * 6 = 96 and 96 is greater than 84, so your program should return the string true.
// Examples
// Input: [2, 2, 2, 2, 4, 1]
// Output: false
// Input: [1, 1, 2, 10, 3, 1, 12]
// Output: true
// Tags
// arraymath fundamentalssequences

function SumMultiplier(arr) {
  // add and multiply by two
  // sort and multiply last two
  const doublingSum =
    arr.reduce((acc, item) => {
      return (acc += item);
    }, 0) * 2;
  const sorted = arr.sort((a, b) => a - b);

  // code goes here
  return sorted[sorted.length - 1] * sorted[sorted.length - 2] > doublingSum
    ? "true"
    : "false";
}

// keep this function call here
console.log(SumMultiplier(readline()));
