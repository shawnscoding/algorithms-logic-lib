// Have the function CheckNums(num1,num2) take both parameters being passed and return the string true if num2 is greater than num1, otherwise return the string false. If the parameter values are equal to each other then return the string -1.

function CheckNums(num1, num2) {
  // If the parameter values are equal to each other then return the string -1.
  // code goes here
  if (num2 > num1) return true;
  if (num2 === num1) return -1;
  return false;
}

// keep this function call here
console.log(CheckNums(readline()));
