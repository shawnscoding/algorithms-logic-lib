// multiple pointers averagePair
//  write a function called averagePair. given a sorted array of integers and a target average.
// determine if there is a pair of values in the array where the average of the pair equals the
// target average.
// define start and end
// - use while
//

// function averagePair(arr, num) {
//   let start = 0;
//   let end = arr.length - 1;

//   while (start < end) {
//     let avg = arr[start] + arr[end];
//     if (avg / 2 === num) return true;
//     else if (avg / 2 > num) end--;
//     else start++;
//   }
//   return false;
// }

// console.log(averagePair([1, 2, 3], 2.5));
// console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));
