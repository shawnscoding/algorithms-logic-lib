// function merge(arr1, arr2) {
//   let i = 0;
//   let j = 0;
//   const result = [];
//   // use while
//   if (arr1.length > arr2.length) {
//     while (i < arr2.length) {
//       if (arr2[i] < arr1[j]) {
//         result.push(arr2[i]);
//         i++;
//       } else {
//         result.push(arr1[j]);
//         j++;
//       }
//     }
//     if (arr1.length - 1 >= j) {
//       while (j < arr1.length) {
//         result.push(arr1[j]);
//         j++;
//       }
//     }
//   } else {
//     while (i < arr1.length) {
//       if (arr1[i] < arr2[j]) {
//         result.push(arr1[i]);
//         i++;
//       } else {
//         result.push(arr2[j]);
//         j++;
//       }
//     }
//     if (arr2.length - 1 >= j) {
//       while (j < arr2.length) {
//         result.push(arr2[j]);
//         j++;
//       }
//     }
//   }

//   return result;
// }

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

  //   console.log("i j ::", i, j);

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
  //   store.push(left);
  //   store.push(right);
  return merge(mertgeSort(left), mertgeSort(right));
}

// console.log("mertgeSort ::", mertgeSort([1, 7, 45, 12, 55, 14, 99, 100]));
console.log(mertgeSort([1, 232, 43, 24, 41, 7, 45, 14, 99, 100]));
// console.log("store ::", store);
