
// challenge 1
// write a function called same, which accepts two arrays.
// the function should return true if every value in the array
// has it's corresponding value squared in the second array. The 
// frequency of values must be the same.

// 2. concrete examples
// same([1, 2, 3], [1, 4, 9])
// same([3, 5, 2], [4, 25, 9])
// same([3, 5, 2, 2], [4, 4, 25, 9])
// 3. break it down 
// convert both to objects
// do two set of for loops
// check if there is the value squared in first array in second arr with frequency

// 4. solve or simplify  
// const same = (arr1, arr2) => {
//     const obj1 = {}
//     const obj2 = {}
//     for(const item of arr1) {
//         obj1[item] = (obj1[item] | 0) + 1
//     }

//     for(const item of arr2) {
//         obj2[item] = (obj2[item] | 0) + 1
//     }



//     for(const item in obj1){

        
//         if(obj2[item**2] === undefined){
//             return false
//         }
//         // can be replaced with item ** 2 in obj2

//         if(obj2[item**2] !== obj1[item]){
//             return false
//         }
//     }

//     return true

// }

// const res = same([3, 5, 2], [4, 25, 9])
// const res2 = same([3, 5, 2, 9], [4, 25, 9, 1])
// const res3 = same([3, 5, 2, 2], [4, 4, 25, 9])
// console.log("res ::", res)
// console.log("res ::", res2)
// console.log("res ::", res3)

// 5. refactor
// const same = (arr1, arr2) => {
//     const obj2 = {}
//     if(arr1.length !== arr2.length ){
//         return false
//     }

//     for(const val of arr2) {
//         obj2[val] = (obj2[val] | 0) + 1
//     }

//     for(let i = 0; i < arr1.length; i++ ){
//         const num = arr1[i]
//         if(!obj2[num ** 2]){
//             return false
//         } else {
//             obj2[num ** 2] -= 1
//         }
//         console.log('obj2[num ** 2]',num,  obj2[num ** 2])
 
//     }

//     return true

// }

// const res = same([3, 5, 2], [4, 25, 9])
// const res2 = same([3, 5, 2, 9], [4, 25, 9, 1])
// const res3 = same([3, 5, 2, 2], [4, 4, 25, 9])
// console.log("res ::", res)
// console.log("res ::", res2)
// console.log("res ::", res3)


// challenge 2
// anagrams
// given two strings, write a function to determine if the second
// string is an anagram of the first. An anagram is a word, phrase
// , or name formed by rearranging the letters of another, 
// such as cinema, formed from iceman.
// 2. concrete examples
// validAnagram('', '')
// validAnagram('anz', 'nza')
// validAnagram('abc', 'abc')
// validAnagram('abc', 'abcw') // invalid
// validAnagram('abc', 'xyz') // invaild
// break it down 
// -validate length
// use frequency counter which involves converting both to objs
// -validate frequency

// const validAnagram = (str1, str2) => {
//     let res;
//     if(str1.length !== str2.length){
//         res = false
//     }
//     const obj1 = {}
//     for(let i = 0; i < str1.length; i++){
//         let letter = str1[i]
//         obj1[letter] ? obj1[letter] += 1 : obj1[letter] = 1;
//     }

//     for(let i = 0; i < str2.length; i++){
//         let letter = str2[i]
//         if(!obj1[letter]){
//             res = false
//         } else {
//             obj1[letter] -= 1
//         }
//     }

//     res = res === undefined ? true : res
//     console.log("res ::", res)
// }



// validAnagram('', '')
// validAnagram('anz', 'nza')
// validAnagram('abc', 'abc')
// validAnagram('abcs', 'abcc') // invalid
// validAnagram('abc', 'xyz') // invaild

