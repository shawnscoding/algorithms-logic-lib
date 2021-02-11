// Mean Mode
// Have the function MeanMode(arr) take the array of numbers stored in arr and return 1 if the mode equals the mean, 0 if they don't equal each other (ie. [5, 3, 3, 3, 1] should return 1 because the mode (3) equals the mean (3)). The array will not be empty, will only contain positive integers, and will not contain more than one mode.
// Examples
// Input: [1, 2, 3]
// Output: 0
// Input: [4, 4, 4, 6, 2]
// Output: 1
// Tags
// arraymath fundamentalshash table

function MeanMode(arr) {
  let mean = 0;
  let mode = { count: 0, val: "" };
  const lookup = {};

  for (item of arr) {
    mean += item;
    lookup[item] ? lookup[item]++ : (lookup[item] = 1);
    if (lookup[item] > mode.count) {
      mode = {
        count: lookup[item],
        val: item,
      };
    }
  }
  mean = Math.round(mean / arr.length);
  // code goes here
  return mode.val === mean ? 1 : 0;
}

// time complexity: O(n)
// time complexity: n

// keep this function call here
console.log(MeanMode([1, 2, 3, 3, 4]));
