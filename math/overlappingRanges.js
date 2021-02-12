// Overlapping Ranges
// Have the function OverlappingRanges(arr) take the array of numbers stored in arr which will contain 5 positive integers, the first two representing a range of numbers (a to b), the next 2 also representing another range of integers (c to d), and a final 5th element (x) which will also be a positive integer, and return the string true if both sets of ranges overlap by at least x numbers. For example: if arr is [4, 10, 2, 6, 3] then your program should return the string true. The first range of numbers are 4, 5, 6, 7, 8, 9, 10 and the second range of numbers are 2, 3, 4, 5, 6. The last element in the array is 3, and there are 3 numbers that overlap between both ranges: 4, 5, and 6. If both ranges do not overlap by at least x numbers, then your program should return the string false.
// Examples
// Input: [5,11,1,5,1]
// Output: true
// Input: [1,8,2,4,4]
// Output: false
// Tags
// arraysearchingset theory

function OverlappingRanges(arr) {
  let overlap = arr[4];
  let numShared = 0;
  for (let i = arr[0]; i <= arr[1]; i++) {
    if (i >= arr[2] && i <= arr[3]) {
      numShared++;
    }
  }

  if (numShared >= overlap) {
    return "true";
  }
  return "false";
}

// time complexity O(n)

console.log(OverlappingRanges([3, 5, 3, 10, 2]));

// function OverlappingRanges(arr) {
//   const firstRange = [];
//   const secondRange = [];
//   for (var i = arr[0]; i <= arr[1]; i++) {
//     firstRange.push(i);
//   }
//   for (var i = arr[2]; i <= arr[3]; i++) {
//     secondRange.push(i);
//   }
//   // define variable requiredOverlab and count
//   let count = 0;

//   // use nested for loop and check how many overlab
//   for (let i = 0; i < firstRange.length; i++) {
//     for (let j = 0; j < secondRange.length; j++) {
//       if (firstRange[i] === secondRange[j]) {
//         count++;
//       }
//     }
//   }

//   return arr[4] <= count ? "true" : "false";
// }
// time complexity O(n^2)
// bad logic
