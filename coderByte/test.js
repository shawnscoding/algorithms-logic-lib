// String Merge
// Have the function StringMerge(str) read the str parameter being passed which will contain a large string of alphanumeric characters with a single asterisk character splitting the string evenly into two separate strings. Your goal is to return a new string by pairing up the characters in the corresponding locations in both strings. For example: if str is "abc1*kyoo" then your program should return the string akbyco1o because a pairs with k, b pairs with y, etc. The string will always split evenly with the asterisk in the center.
// Examples
// Input: "aaa*bbb"
// Output: ababab
// Input: "123hg*aaabb"
// Output: 1a2a3ahbgb
// Tags
// string manipulationsearchingFacebook

function StringMerge(str) {
  const arr = str.split("*");
  let result = "";
  for (let i = 0; i < arr[0].length; i++) {
    result += arr[0][i] + arr[1][i];
  }

  // code goes here
  return result;
}

// keep this function call here
console.log(StringMerge(readline()));
