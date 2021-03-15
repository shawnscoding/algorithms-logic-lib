// Formatted Division
// Have the function FormattedDivision(num1,num2) take both parameters being passed, divide num1 by num2, and return the result as a string with properly formatted commas and 4 significant digits after the decimal place. For example: if num1 is 123456789 and num2 is 10000 the output should be "12,345.6789". The output must contain a number in the one's place even if it is a zero.
// Examples
// Input: 2 & num2 = 3
// Output: 0.6667
// Input: 10 & num2 = 10
// Output: 1.0000
// Tags
// math fundamentalsstring manipulation

function FormattedDivision(num1, num2) {
  var division = (num1 / num2).toFixed(4);
  division = division.toString();
  var newString = "";

  count = -5;
  for (var i = division.length - 1; i >= 0; i--) {
    if (count > 0 && count % 3 === 0) {
      newString = newString + ",";
    }
    newString += division[i];
    count += 1;
  }
  finalString = "";
  for (var i = newString.length - 1; i >= 0; i--) {
    finalString += newString[i];
  }
  return finalString;
}

// keep this function call here
// to see how to enter arguments in JavaScript scroll down
FormattedDivision(readline());
