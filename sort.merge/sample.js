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

// console.log(merge([1, 555], [2, 14, 99, 100]));

// first mertgeSort it, recursively
// store sliced value into arr

const store = [];

function mertgeSort(arr) {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);
  return merge(mertgeSort(left), mertgeSort(right));
}

console.log(mertgeSort([1, 232, 43, 24, 41, 7, 45, 14]));
// if input is eight items long array, it splits third times.
// if it is 32 items long, it splits 5 times
// 32
// 16 16
// 8 8 8 8
// 4 4 4 4 4 4 4 4
// 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
// 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
// so this is O of N log n time complexity
// but space complexity is O of N
