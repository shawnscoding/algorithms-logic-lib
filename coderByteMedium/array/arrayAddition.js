// Array Addition
// Have the function ArrayAddition(arr) take the array of numbers stored in arr and return the string true if any combination of numbers in the array (excluding the largest number) can be added up to equal the largest number in the array, otherwise return the string false. For example: if arr contains [4, 6, 23, 10, 1, 3] the output should return true because 4 + 6 + 10 + 3 = 23. The array will not be empty, will not contain all the same elements, and may contain negative numbers.
// Examples
// Input: [5,7,16,1,2]
// Output: false
// Input: [3,5,-1,8,12]
// Output: true
// Tags
// arraysearchingdynamic programmingGoogleMicrosoftFacebookAmazonrecursion

function ArrayAddition(arr) {
  let target = arr.reduce((acc, item) => (acc < item ? item : acc), 0);
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== target) sum += arr[i];
  }
  return sum >= target ? "true" : "false";
}

console.log(ArrayAddition(readline()));
