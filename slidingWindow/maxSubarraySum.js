// maxSubarraySum
// subaaray must consist of consecutive elements from the original array.
// first get first sum
// use for loop and remove start and end index for each looping

const maxSubarraySum = (arr, num) => {
  if (arr.length < num) return null;
  let max = 0;
  for (let i = 0; i < num; i++) {
    max += arr[i];
  }

  let currentMax = max;
  for (let i = num; i < arr.length; i++) {
    // 5 I shouldn't calculate with max, should have been currentM0ax
    currentMax += arr[i] - arr[i - num];
    // console.log(`${max} + ${arr[i]} - ${arr[i - num]} = ${temp}, max ${max}`);
    max = Math.max(max, currentMax);
  }

  return max;
};

// function maxSubarraySum(arr, num) {
//   if (arr.length < num) return null;

//   let total = 0;
//   for (let i = 0; i < num; i++) {
//     total += arr[i];
//   }
//   let currentTotal = total;
//   for (let i = num; i < arr.length; i++) {
//     currentTotal += arr[i] - arr[i - num];
//     total = Math.max(total, currentTotal);
//   }
//   return total;
// }

console.log(maxSubarraySum([100, 200, 300, 400], 2)); // 700
console.log(maxSubarraySum([2, 7, 10, 1, 2, 1, 2, 3], 3)); // 19
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)); // 5
console.log(maxSubarraySum([2, 3], 3)); // null
