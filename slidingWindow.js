// write a function called maxsubarraysum which accepts an array of integers 
// and a number called n. the function should calculate the maximum sum of n
// consecutive elements in the array.
// 1 2 
// 3 use one for loop, substract i and add n on looping
// // 4
// const maxSubarraySum = (arr, n) => {
//     let max = 0;
//     for (let i = 0; i < arr.length - ( n - 1) ; i++){
//     let sum = 0;
//         for(let j = 0; j < n; j++){
//              sum += arr[i + j]
//         }
//         if(sum > max) {
//             max = sum
//         }
//     }

//     return max
// }

// console.log(maxSubarraySum([ 1, 2, 4, 2, 6, 1, 10 ], 2)) //11 
// console.log(maxSubarraySum([ 1, 2,22, 2, 6, 1, 10 ], 3)) //17 

// // 5
// store first sum
// substract first one and add new one and compare 
// successfully avoid o of n square
// const maxSubarraySum = (arr, n) => {
//     let maxSum = 0;
//     let tempSum = 0

//     for (let i = 0; i < n; i++){
//         maxSum += arr[i]
//     }

//     console.log("maxSum ::", maxSum)
//     tempSum = maxSum
//     for (let i = n; i < arr.length; i++){
//         tempSum = tempSum - arr[i - n] + arr[i]
//          maxSum = Math.max(tempSum, maxSum)
//     }

//     return maxSum
// }

// console.log(maxSubarraySum([ 1, 2, 4, 2, 6, 1, 10 ], 2)) //11 
// console.log(maxSubarraySum([ 1, 2,22, 2, 6, 1, 10 ], 3)) //17 
