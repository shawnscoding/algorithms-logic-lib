// FizzBuzz
// Have the function FizzBuzz(num) take the num parameter being passed and return all the numbers from 1 to num separated by spaces, but replace every number that is divisible by 3 with the word "Fizz", replace every number that is divisible by 5 with the word "Buzz", and every number that is divisible by both 3 and 5 with the word "FizzBuzz". For example: if num is 16, then your program should return the string "1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz 16". The input will be within the range 1 - 50.
// Examples
// Input: 3
// Output: 1 2 Fizz
// Input: 8
// Output: 1 2 Fizz 4 Buzz Fizz 7 8
// Tags
// string manipulationmath fundamentals

// my solution (possibly mine is better for time complexity)
function FizzBuzz(num) {
  let strArr = [];
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      strArr.push("FizzBuzz");
    } else if (i % 3 === 0) {
      strArr.push("Fizz");
    } else if (i % 5 === 0) {
      strArr.push("Buzz");
    } else {
      strArr.push(i);
    }
  }
  return strArr.join(" ");
}

// keep this function call here
FizzBuzz(readline());

// top rated
function FizzBuzz(num) {
  let result = "";

  for (let i = 1; i <= num; i++) {
    if (i / 3 === Math.round(i / 3) && i / 5 === Math.round(i / 5)) {
      result += "FizzBuzz ";
    } else if (i / 3 === Math.round(i / 3)) {
      result += "Fizz ";
    } else if (i / 5 === Math.round(i / 5)) {
      result += "Buzz ";
    } else {
      result += `${i.toString()} `;
    }
  }
  return result.trim("");
}

console.log(FizzBuzz(readline()));
