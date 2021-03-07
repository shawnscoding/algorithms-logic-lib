// String Periods
// Have the function StringPeriods(str) take the str parameter being passed and determine if there is some substring K that can be repeated N > 1 times to produce the input string exactly as it appears. Your program should return the longest substring K, and if there is none it should return the string -1.

// For example: if str is "abcababcababcab" then your program should return abcab because that is the longest substring that is repeated 3 times to create the final string. Another example: if str is "abababababab" then your program should return ababab because it is the longest substring. If the input string contains only a single character, your program should return the string -1.
// Examples
// Input: "abcxabc"
// Output: -1
// Input: "affedaaffed"
// Output: -1
// Tags
// math fundamentalsalgebrarecursionstring manipulationGoogleMicrosoft

const addStr = (start, end, str) => {
  let result = "";
  for (let i = start; i < end; i++) {
    result += str[i];
  }
  return result;
};

function StringPeriods(str) {
  // use a nested for loop
  let final = -1;
  let devide = Math.floor(str.length / 2);
  for (let i = 2; i < devide; i++) {
    if (i % 2 === 0) {
      let range = i + i + 2;
      let result1 = addStr(0, i + 1, str);
      let result2 = addStr(i + 1, range, str);
      if (result1 === result2) final = result1;
    }
  }
  return final;
}

// top rated
function StringPeriods(str) {
  var current = str[0];
  var substrings = [];

  if (str.length === 1) {
    return -1;
  }

  for (var i = 1; i < str.length; i++) {
    if (i === str.length - 1) continue;
    current += str[i];
    var reg = new RegExp(current, "g");
    var matches = str.match(reg).join("");
    if (matches === str) {
      substrings.push(current);
    }
  }

  return substrings[substrings.length - 1];
}

console.log(StringPeriods("abababab"));
