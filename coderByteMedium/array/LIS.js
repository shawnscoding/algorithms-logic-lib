// Longest Increasing Sequence
// Have the function LongestIncreasingSequence(arr) take the array of positive integers stored in arr and return the length of the longest increasing subsequence (LIS). A LIS is a subset of the original list where the numbers are in sorted order, from lowest to highest, and are in increasing order. The sequence does not need to be contiguous or unique, and there can be several different subsequences. For example: if arr is [4, 3, 5, 1, 6] then a possible LIS is [3, 5, 6], and another is [1, 6]. For this input, your program should return 3 because that is the length of the longest increasing subsequence.
// Examples
// Input: [9, 9, 4, 2]
// Output: 1
// Input: [10, 22, 9, 33, 21, 50, 41, 60, 22, 68, 90]
// Output: 7
// Tags
// arraydynamic programmingsortingGoogle
// function LongestIncreasingSequence(arr) {

function LongestIncreasingSequence(arr) {
  const sets = [];
  for (let i = 0; i < arr.length; i++) {
    let subArr = [arr[i]];
    for (let j = i + 1; j < arr.length; j++) {
      if (subArr[subArr.length - 1] < arr[j]) {
        subArr.push(arr[j]);
      } else if (
        subArr[subArr.length - 2] < arr[j] &&
        subArr[subArr.length - 1] > arr[j]
      ) {
        subArr[subArr.length - 1] = arr[j];
      }
    }
    sets.push(subArr);
  }

  return Math.max(...sets.map((item) => item.length));
}

// keep this function call here
console.log(LongestIncreasingSequence(readline()));
