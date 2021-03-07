// Palindrome Two
// Have the function PalindromeTwo(str) take the str parameter being passed and return the string true if the parameter is a palindrome, (the string is the same forward as it is backward) otherwise return the string false. The parameter entered may have punctuation and symbols but they should not affect whether the string is in fact a palindrome. For example: "Anne, I vote more cars race Rome-to-Vienna" should return true.
// Examples
// Input: "Noel - sees Leon"
// Output: true
// Input: "A war at Tarawa!"
// Output: true
// Tags
// string manipulationsearching
function PalindromeTwo(str) {
  let compareA = str.replace(/\W+/g, "").toLowerCase();
  let compareB = compareA.split("").reverse().join("");
  // code goes here
  return compareA === compareB ? "true" : "false";
}

// keep this function call here
console.log(PalindromeTwo(readline()));
