function ChangingSequence(arr) {
  // find out if it's increasing
  // check when this pattern finishes

  if (arr[0] < arr[1]) {
    for (let i = 1; i < arr.length - 1; i++) {
      if (arr[i] >= arr[i + 1]) {
        return i;
      }
    }
  } else {
    for (let i = 1; i < arr.length - 1; i++) {
      if (arr[i] <= arr[i + 1]) {
        return i;
      }
    }
  }
  return -1;
}

// keep this function call here
// time complexity range from O(1) to O(N)
console.log(ChangingSequence([1, 3, 2, 4]));
