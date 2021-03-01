// H Distance
// Have the function HDistance(strArr) take the array of strings stored in strArr, which will only contain two strings of equal length and return the number of characters at each position that are different between them. For example: if strArr is ["house", "hours"] then your program should return 2. The string will always be of equal length and will only contain lowercase characters from the alphabet and numbers.
// Examples
// Input: ["10011", "10100"]
// Output: 3
// Input: ["abcdef", "defabc"]
// Output: 6
// Tags
// arraysearching

function HDistance(strArr) {
  let count = 0;
  for (let i = 0; i < strArr[0].length; i++) {
    if (strArr[0][i] !== strArr[1][i]) count++;
  }

  // code goes here
  return count;
}

// keep this function call here
console.log(HDistance(readline()));
