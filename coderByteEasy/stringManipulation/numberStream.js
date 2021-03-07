// Number Stream
// Have the function NumberStream(str) take the str parameter being passed which will contain the numbers 2 through 9, and determine if there is a consecutive stream of digits of at least N length where N is the actual digit value. If so, return the string true, otherwise return the string false. For example: if str is "6539923335" then your program should return the string true because there is a consecutive stream of 3's of length 3. The input string will always contain at least one digit.
// Examples
// Input: "5556293383563665"
// Output: false
// Input: "5788888888882339999"
// Output: true
// Tags
// string manipulationsearchingdata sciencedata engineerback-endAmazon

// best solution on community

function NumberStream(str) {
  let count = 1;
  let curr = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === curr) {
      count++;
      if (count === Number(curr)) return true;
    } else {
      count = 1;
      curr = str[i];
    }
  }
  return false;
}
NumberStream(readline());

// my solution
function NumberStream(str) {
  let result = "false";
  for (let i = 0; i < str.length; i++) {
    let num = Number(str[i]);
    for (let j = 1; j < num; j++) {
      if (str[i] === str[i + j]) result = "true";
      else {
        result = "false";
        break;
      }
    }

    if (result === "true") return result;
  }

  // code goes here
  return result;
}

// keep this function call here
console.log(NumberStream(readline()));
