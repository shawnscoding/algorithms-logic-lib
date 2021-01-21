// function quick(arr, base, done) {
//   if (done) return arr;
//   if (arr.length <= 2) {
//     console.log("called ");
//     done = true;
//   }
//   // push idxes what are less to left, what are more to right
//   //   필요한 것 기준, 스왑된 기준 위치, 기준으로 부터 좌우 정렬
//   let i = 0;
//   const baseVal = arr[base];

//   let leftCounter = 0;
//   while (i < arr.length) {
//     if (baseVal > arr[i]) {
//       arr[leftCounter] = arr[i];
//       leftCounter++;
//     }
//     i++;
//   }

//   arr[leftCounter] = baseVal;
//   console.log("arr.slice(0, leftCounter) :: ", arr.slice(0, leftCounter));
//   console.log(arr.slice(leftCounter));

//   quick(arr.slice(0, leftCounter), 0, done);
//   return arr;
// }

// console.log();
// // left 2 1 , 6 7
// // 2, 1 ,6 ,7
// // 1 2 6 7
// //

// function quick(arr) {
//   let i = 0;
//   let base = 0;
//   const baseVal = arr[base];

//   let leftCounter = 0;
//   while (i < arr.length) {
//     if (baseVal > arr[i]) {
//       arr[leftCounter] = arr[i];
//       leftCounter++;
//     }
//     i++;
//   }

//   // quick(arr.slice(0, leftCounter), 0, done);
//   return leftCounter;
// }

// function pivot(arr, startIdx = 0, len = arr.length) {
//   let i = 1;
//   let pivotIdx = startIdx;

//   function swap(arr, a, b) {
//     temp = arr[a];
//     arr[a] = arr[b];
//     arr[b] = temp;
//     return arr;
//   }

//   while (i < len) {
//     if (arr[startIdx] > arr[i]) {
//       pivotIdx++;
//       swap(arr, pivotIdx, i);
//     }
//     i++;
//   }

//   swap(arr, startIdx, pivotIdx);

//   return pivotIdx;
// }

// function quickSort(arr, startIdx = 0, len = arr.length) {
//   if (startIdx !== len - 1) {
//     const pivotIdx = pivot(arr, startIdx, len);
//     quickSort(arr, startIdx, pivotIdx);
//     quickSort(arr, pivotIdx + 1, arr.length);

//     console.log("arr ::", arr);
//   }
//   return arr;
// }

// console.log(quickSort([3, 2, 6, 1, 5]));

function pivot(arr, startIdx = 0, len = arr.length - 1) {
  let i = startIdx + 1;
  let pivotIdx = startIdx;

  function swap(arr, a, b) {
    let temp;
    temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
    return arr;
  }

  while (i <= len) {
    if (arr[startIdx] > arr[i]) {
      pivotIdx++;
      swap(arr, pivotIdx, i);
    }
    i++;
  }

  swap(arr, startIdx, pivotIdx);

  return pivotIdx;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    const pivotIdx = pivot(arr, left, right);
    quickSort(arr, left, pivotIdx - 1);
    quickSort(arr, pivotIdx + 1, right);

    // console.log("arr ::", arr);
  }
  return arr;
}

console.log(quickSort([3, 2, 6, 1, 5]));
