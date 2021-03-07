// Have the function DivisionStringified(num1,num2) take both parameters being passed, divide num1 by num2, and return the result as a string with properly formatted commas. If an answer is only 3 digits long, return the number with no commas (ie. 2 / 3 should output "1"). For example: if num1 is 123456789 and num2 is 10000 the output should be "12,346".
// Examples
// Input: 5 & num2 = 2
// Output: 3
// Input: 6874 & num2 = 67
// Output: 103

// my answer
function DivisionStringified(num1, num2) {
  let dividedStr = Math.round(num1 / num2).toString();
  let reversedArr = [...dividedStr].reverse();
  let copiedArr = [...reversedArr];
  let addedCommas = 0;

  for (let i = 1; i <= Math.floor(reversedArr.length / 3); i++) {
    copiedArr.splice(i * 3 + addedCommas, 0, ",");
    addedCommas++;
  }
  if (copiedArr[copiedArr.length - 1] === ",") copiedArr.pop();
  return copiedArr.reverse().join("");
}

console.log(DivisionStringified(503394930, 43));

// top rated answer
function DivisionStringified(num1, num2) {
  let result = Math.round(num1 / num2);
  console.log("result ::", result);
  result = result.toLocaleString();

  return result;
}

console.log(DivisionStringified(503394930, 43));

// good answer
function DivisionStringified(num1, num2) {
  var divided = Math.round(num1 / num2).toString(),
    sub = "";
  for (i = 0; i < divided.length + 1; i++) {
    sub += divided.charAt(i);
    if ((i + 1) % 3 === divided.length % 3 && i !== divided.length - 1)
      sub += ",";
  }
  return sub;
}

// keep this function call here
console.log(DivisionStringified(503394930, 43));
