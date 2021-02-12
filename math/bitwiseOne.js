// Bitwise One
// Have the function BitwiseOne(strArr) take the array of strings stored in strArr, which will only contain two strings of equal length that represent binary numbers, and return a final binary string that performed the bitwise OR operation on both strings. A bitwise OR operation places a 0 in the new string where there are zeroes in both binary strings, otherwise it places a 1 in that spot. For example: if strArr is ["1001", "0100"] then your program should return the string "1101"
// Examples
// Input: ["100", "000"]
// Output: 100
// Input: ["00011", "01010"]
// Output: 01011
// Tags
// arraysearchingbitwise operation
function BitwiseOne(strArr) {
  let left = strArr[0].split("");
  let right = strArr[1].split("");
  let result = "";
  for (let i = 0; i < left.length; i++) {
    if (left[i] === "1" || right[i] === "1") {
      result += "1";
    } else {
      result += "0";
    }
  }

  return result;
}

console.log(BitwiseOne(readline()));
