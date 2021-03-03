// One Decremented
// Have the function OneDecremented(str) count how many times a digit appears that is exactly one less than the previous digit. For example: if str is "5655984" then your program should return 2 because 5 appears directly after 6 and 8 appears directly after 9. The input will always contain at least 1 digit.
// Examples
// Input: "56"
// Output: 0
// Input: "9876541110"
// Output: 6
// Tags
// math fundamentals
function OneDecremented(str) {
  // The input will always contain at least 1 digit.
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    let prev = +str[i - 1];

    if (prev - 1 === +str[i]) {
      count++;
    }
  }
  return count;
}

// keep this function call here
console.log(OneDecremented(readline()));
