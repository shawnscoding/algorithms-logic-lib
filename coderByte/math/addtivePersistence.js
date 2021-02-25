// Additive Persistence
// Have the function AdditivePersistence(num) take the num parameter being passed which will always be a positive integer and return its additive persistence which is the number of times you must add the digits in num until you reach a single digit. For example: if num is 2718 then your program should return 2 because 2 + 7 + 1 + 8 = 18 and 1 + 8 = 9 and you stop at 9.
// Examples
// Input: 4
// Output: 0
// Input: 19
// Output: 2
// Tags
// math fundamentals

function AdditivePersistence(num) {
  var counter = 0;

  while (num > 9) {
    num = sumDigits(num);
    counter++;
  }
  return counter;
}

function sumDigits(num) {
  return num
    .toString()
    .split("")
    .reduce(function (sum, number) {
      return sum + Number(number);
    }, 0);
}
// Consider the process of taking a number, adding its digits, then adding the digits of the number derived from it, etc., until the remaining number has only one digit. The number of additions required to obtain a single digit from a number n is called the additive persistence of n, and the digit obtained is called the digital root of n.
// keep this function call here
console.log(AdditivePersistence(readline()));
