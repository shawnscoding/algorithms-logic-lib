// Longest Consecutive
// Have the function LongestConsecutive(arr) take the array of positive integers stored in arr and return the length of the longest consecutive subsequence (LCS). An LCS is a subset of the original list where the numbers are in sorted order, from lowest to highest, and are in a consecutive, increasing order. The sequence does not need to be contiguous and there can be several different subsequences. For example: if arr is [4, 3, 8, 1, 2, 6, 100, 9] then a few consecutive sequences are [1, 2, 3, 4], and [8, 9]. For this input, your program should return 4 because that is the length of the longest consecutive subsequence.
// Examples
// Input: [6, 7, 3, 1, 100, 102, 6, 12]
// Output: 2
// Input: [5, 6, 1, 2, 8, 9, 7]
// Output: 5
// Tags
// arraysequencesdynamic programmingsortingGoogleFacebookMicrosoft

function merge(arr1, arr2) {
  let i = 0;
  let j = 0;
  const result = [];
  // use while

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  return result;
}

const store = [];

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
}

function LongestConsecutive(arr) {
  arr = mergeSort(arr);
  let sets = [];
  let idx = 0;
  // let subArr = []
  for (let i = 0; i < arr.length; i++) {
    if (i === 0) sets.push(new Set([arr[i]]));
    else if (arr[i - 1] + 1 === arr[i] || arr[i - 1] === arr[i]) {
      sets[idx] = sets[idx].add(arr[i]);
    } else {
      sets.push(new Set([arr[i]]));
      idx++;
    }
  }
  console.log(sets);
  return sets.reduce((acc, item) => {
    if (acc > item.size) return acc;
    else return item.size;
  }, 0);
}

console.log(LongestConsecutive(readline()));
