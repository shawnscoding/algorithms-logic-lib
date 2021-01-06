// multiple pointers - isSubsequence
// write a function called isSubsequence which takes two strings and checks whether the characters in the first
// string form a subsequence of the characters in the second string. in other words, the function should
// order matter so can't use frequency counter

// - remove white space
// loop str2
// const isSubsequence = (_str1, _str2) => {
//     const str1 = _str1.trim()
//     const str2 = _str2.trim()
//     str[]

//     for(let i = 0; i < str2.length ; i++ ) {

//     }

// }

//  5 isSubsequence Solution - Iterative
// - define i and j for two strs
// - use while for str2
// - increase one on character match of str2 to str1
const isSubsequence = (str1, str2) => {
  let i = 0; // used to count the num of  matching value
  let j = 0;
  while (j < str2.length) {
    if (str2[j] === str1[i]) i++;
    // this makes sure i increases only when matching
    if (i === str1.length) return true;
    j++;
  }
  return false;
};

// isSubsequence Solution - Recursive but not O(1) Space
// function isSubsequence(str1, str2) {
//   if(str1.length === 0) return true
//   if(str2.length === 0) return false
//   if(str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1))
//   return isSubsequence(str1, str2.slice(1))
// }

console.log(isSubsequence("hello", "hello world")); // true
console.log(isSubsequence("abc", "adsadasbdsac")); // false
