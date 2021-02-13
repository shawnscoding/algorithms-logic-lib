// Palindrome Creator
// Have the function PalindromeCreator(str) take the str parameter being passed and determine if it is possible to create a palindromic string of minimum length 3 characters by removing 1 or 2 characters. For example: if str is "abjchba" then you can remove the characters jc to produce "abhba" which is a palindrome. For this example your program should return the two characters that were removed with no delimiter and in the order they appear in the string, so jc. If 1 or 2 characters cannot be removed to produce a palindrome, then return the string not possible.

// If the input string is already a palindrome, your program should return the string palindrome. Your program should always remove the characters that appear earlier in the string. In the example above, you can also remove ch to form a palindrome but jc appears first, so the correct answer is jc.

// The input will only contain lowercase alphabetic characters. Your program should always attempt to create the longest palindromic substring by removing 1 or 2 characters (see second sample test case as an example). The 2 characters you remove do not have to be adjacent in the string.
// Examples
// Input: "mmop"
// Output: not possible
// Input: "kjjjhjjj"
// Output: k
// Tags
// string manipulationsearching
function isPalindrome(arr) {
  let first = arr.join("");
  let second = arr.reverse().join("");
  if (first.length < 3) return false;
  return first === second;
}

function PalindromeCreator(str) {
  let strArr = str.split("");
  if (isPalindrome(strArr)) return "palindrome";

  let arr = str.split("");

  for (let i = 0; i < arr.length; i++) {
    const filtered = arr.filter(function (value, index) {
      return index !== i;
    });
    if (isPalindrome(filtered)) return arr[i];
  }
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i !== j) {
        let indexes = [i, j];
        const filtered = arr.filter(function (value, index) {
          return indexes.indexOf(index) == -1;
        });
        if (isPalindrome(filtered)) return `${arr[i]}${arr[j]}`;
      }
    }
  }

  // code goes here
  return "not possible";
}
// bjhba
// keep this function call here
console.log(PalindromeCreator(readline()));
