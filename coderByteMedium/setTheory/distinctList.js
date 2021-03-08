// Distinct List
// Have the function DistinctList(arr) take the array of numbers stored in arr and determine the total number of duplicate entries. For example if the input is [1, 2, 2, 2, 3] then your program should output 2 because there are two duplicates of one of the elements.
// Examples
// Input: [0,-2,-2,5,5,5]
// Output: 3
// Input: [100,2,101,4]
// Output: 0
// Tags
// arraymath fundamentalsset theory

0;
function DistinctList(arr) {
  let list = new Set();
  let dupes = 0;

  for (let i = 0; i < arr.length; i++) {
    if (list.has(arr[i])) {
      dupes++;
    } else {
      list.add(arr[i]);
    }
  }

  return dupes;
}

// keep this function call here
DistinctList(readline());
