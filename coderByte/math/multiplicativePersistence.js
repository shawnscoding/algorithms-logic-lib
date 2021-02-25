// Multiplicative Persistence
// Have the function MultiplicativePersistence(num) take the num parameter being passed which will always be a positive integer and return its multiplicative persistence which is the number of times you must multiply the digits in num until you reach a single digit. For example: if num is 39 then your program should return 3 because 3 * 9 = 27 then 2 * 7 = 14 and finally 1 * 4 = 4 and you stop at 4.
// Examples
// Input: 4
// Output: 0
// Input: 25
// Output: 2
// Tags
// math fundamentals
function MultiplicativePersistence(num) {
  // operate while loop until num is less than 10
  // increment one to counter each time of loop
  let counter = 0;
  while (9 < num) {
    num = multiplyDigits(num);
    counter++;
  }
  // return counter
  return counter;
}

const multiplyDigits = (num) => {
  return num
    .toString()
    .split("")
    .reduce((a, b) => Number(a) * Number(b));
};

// keep this function call here
console.log(MultiplicativePersistence(readline()));
