// Have the function MinWindowSubstring(strArr) take the array of strings stored in strArr, which will contain only two strings, the first parameter being the string N and the second parameter being a string K of some characters, and your goal is to determine the smallest substring of N that contains all the characters in K. For example: if strArr is ["aaabaaddae", "aed"] then the smallest substring of N that contains the characters a, e, and d is "dae" located at the end of the string. So for this example your program should return the string dae.

// Another example: if strArr is ["aabdccdbcacd", "aad"] then the smallest substring of N that contains all of the characters in K is "aabd" which is located at the beginning of the string. Both parameters will be strings ranging in length from 1 to 50 characters and all of K's characters will exist somewhere in the string N. Both strings will only contains lowercase alphabetic characters.

// Use the Parameter Testing feature in the box below to test your code with different arguments.

const spliceString = (str, index, count, add) => {
  // We cannot pass negative indexes directly to the 2nd slicing operation.
  if (index < 0) {
    index = str.length + index;
    if (index < 0) {
      index = 0;
    }
  }

  return str.slice(0, index) + (add || "") + str.slice(index + count);
};

function MinWindowSubstring(strArr) {
  let longerStr = strArr[0].length > strArr[1].length ? strArr[0] : strArr[1];
  let target = strArr[0].length > strArr[1].length ? strArr[1] : strArr[0];
  let lookup = "";

  for (let i = 0; i < target.length; i++) {
    lookup += target[i];
  }

  let list = [];
  for (let i = 0; i < longerStr.length; i++) {
    let targetIdx = lookup.indexOf(longerStr[i]);
    if (targetIdx > -1) {
      for (let j = 0; j < list.length; j++) {
        if (list[j].requirement.length > 0) {
          list[j].length = list[j].length + 1;
          list[j].chars = list[j].chars + longerStr[i];
          list[j].requirement = spliceString(list[j].requirement, targetIdx, 1);
        }
      }
      let copy = lookup;

      copy = spliceString(copy, targetIdx, 1);
      list.push({ length: 1, chars: longerStr[i], requirement: copy });
    } else {
      for (let j = 0; j < list.length; j++) {
        if (!list[j].requirement.length) {
          list[j].length = list[j].length + 1;
          list[j].chars = list[j].chars + longerStr[i];
        }
      }
    }
  }

  let result = { length: Infinity, chars: "" };
  for (let i = 0; i < list.length; i++) {
    if (!list[i].requirement.length && result.length > list[i].length)
      result = { length: list[i].length, chars: list[i].chars };
  }

  return result.chars;
}

// keep this function call here
console.log(MinWindowSubstring(["aaabaaddae", "aed"]));
