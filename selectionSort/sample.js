function sort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minimumIdx = i;
    let temp;
    for (let j = i + 1; j < arr.length; j++) {
      console.log(" i j", minimumIdx, j);
      if (arr[minimumIdx] > arr[j]) {
        // swap
        minimumIdx = j;
      }
    }
    temp = arr[minimumIdx];
    arr[minimumIdx] = arr[i];
    arr[i] = temp;
    console.log("current minimumIdx ::", minimumIdx);
    console.log("current arr ::", arr);
    console.log("one step completed");
  }

  return arr;
}

console.log("result :: ", sort([39, 29, 44, 5, 15, 33]));
