// Next Palindrome
// Have the function NextPalindrome(num) take the num parameter being passed and return the next largest palindromic number. The input can be any positive integer. For example: if num is 24, then your program should return 33 because that is the next largest number that is a palindrome.
// Examples
// Input: 2
// Output: 3
// Input: 180
// Output: 181
// Tags
// searching

function NextPalindrome(num) {
  // if less than 10, return n + 1
  if (num < 10) return num + 1;

  while (true) {
    num += 1;
    let reversed = num.toString().split("").reverse().join("");
    if (reversed === num.toString()) return num;
  }
}

// keep this function call here
console.log(NextPalindrome(99));
