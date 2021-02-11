// Third Greatest
// Have the function ThirdGreatest(strArr) take the array of strings stored in strArr and return the third largest word within it. So for example: if strArr is ["hello", "world", "before", "all"] your output should be world because "before" is 6 letters long, and "hello" and "world" are both 5, but the output should be world because it appeared as the last 5 letter word in the array. If strArr was ["hello", "world", "after", "all"] the output should be after because the first three words are all 5 letters long, so return the last one. The array will have at least three strings and each string will only contain letters.
// Examples
// Input: ["coder","byte","code"]
// Output: code
// Input: ["abc","defg","z","hijk"]
// Output: abc
// Tags
// arraysearchingsorting

function ThirdGreatest(strArr) {
  // The array will have at least three strings and each string will only contain letters.
  //  fisrt, map strs in arr to objs with length and sort
  let sortedArrByLeng = strArr.sort((a, b) => b.length - a.length);
  // return word property of index 2

  return sortedArrByLeng[2];
}
// time complexity: O(n)

console.log(ThirdGreatest(["word", "code", "coder"]));
