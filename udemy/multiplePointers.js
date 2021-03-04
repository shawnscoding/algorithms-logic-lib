// // Challenge
// // write a function called sumZero which accepts a sorted array of integers.
// // the function should find the first pair where the sum is 0.
// // Return the array that includes both values that sum to zero
// // or undefined if a pair does not exist.
// // 1. understand
// // 2. concrete examples
// // 3. break it down
// // - use start and end pointer rather than nested looping
// // 4. solve or simplify

// const sumZero = (arr) => {
//     let first = 0
//     let last = arr.length - 1

//     for(let i = 0; i < arr.length; i++) {
//         console.log("num of loop ::", i)
       
//         console.log("arr[first] + arr[last]", first, last)
//         if(arr[first] + arr[last] === 0) {
//             return [arr[first], arr[last]]
//         } else if (arr[first] + arr[last] < 0) {
//             console.log("called first::", first)
//             first++
//         } else {
//             console.log("called")
            
//             last--
//         }
//     }
// }

// // const res1 = sumZero([ -3, -2, -1, 3 ]) 
// // const res2 = sumZero([ -5, -2, -1, 3 ]) 
// const res3 = sumZero([ -5, -2, -1, 2 ]) 
// // console.log("res1 ::", res1)// [3, 3]
// // console.log("res2 ::", res2)// undefined
// console.log("res3 ::", res3)// [-2, 2]

// // 5. refactor


// implement a function called countUniquValues, which accepts a sorted array, 
// and counts the unique values in the array. there can be negative numbers in the array
// but it will always be sorted
// 1
// 2 
// 3 break it down
// - do just one looping using object
// - return obj keys length

// const countUniquValues = (arr) => {
//     const result = {}
//     for(let i = 0; i < arr.length; i++){
//         num = arr[i]
//         if(!result[num]){
//             result[num] = 1  
//         } 
//     }
//     return Object.keys(result).length
// }
// 5 refactor
// use two int i j and mutate arr
const countUniquValues = (arr) => {
    let i = 0;
    for(let j = 1; j < arr.length ; j++){
        if(arr[i] !== arr[j]){
            i++
            arr[i] = arr[j]
        }
    }
    return i + 1
}

console.log(countUniquValues([1, 1,  1, 2, 3, 4]))  // 2
countUniquValues([1, 2, 3, 4, 4, 4, 6]) // 5 
countUniquValues([]) // 0