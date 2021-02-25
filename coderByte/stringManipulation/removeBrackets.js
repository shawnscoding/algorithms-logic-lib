// Remove Brackets
// Have the function RemoveBrackets(str) take the str parameter being passed, which will contain only the characters "(" and ")", and determine the minimum number of brackets that need to be removed to create a string of correctly matched brackets. For example: if str is "(()))" then your program should return the number 1. The answer could potentially be 0, and there will always be at least one set of matching brackets in the string.
// Examples
// Input: "(())()((("
// Output: 3
// Input: "(()("
// Output: 2
// Tags
// string manipulationsearchingFacebookrecursion

// very good and simple sollution
function RemoveBrackets(str) {
  while (str.includes("()")) {
    str = str.replace("()", "");
  }
  return str.length;
}

// keep this function call here
RemoveBrackets(readline());

//   my solution
function RemoveBrackets(str) {
  let numOfClosing = 0;
  let remove = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ")" && numOfClosing === 0) {
      remove++;
    } else if (str[i] === "(") {
      numOfClosing++;
    } else if (str[i] === ")") {
      numOfClosing--;
    }
  }
  // code goes here
  return (remove += numOfClosing);
}

console.log(RemoveBrackets(readline()));
