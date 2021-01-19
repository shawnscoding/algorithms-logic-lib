// implementation
// function bubbleSort(arr) {
//   let temp;
//   for (let i = arr.length; i > 0; i--) {
//     for (let j = 0; j < i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         // swap
//         temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//       console.log(arr, arr[j], arr[j + 1], j);

//     }
//     console.log("one looping completed");
//   }

//   console.log("sorted arr ::", arr);
// }

// bubbleSort([8, -3, 29, 12, 38, 70, 45]);

// optimization with noSwaps;
function bubbleSort(arr) {
  let temp;
  for (let i = arr.length; i > 0; i--) {
    let noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // swap
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
      console.log(arr, arr[j], arr[j + 1], j);
    }
    console.log("one looping completed");
    if (noSwaps) break;
  }

  return arr;
}

console.log("result ::", bubbleSort([3, 29, 11, 38, 45, 70]));
