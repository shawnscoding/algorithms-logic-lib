const data = [7, 6, 5, 1, 2, 3, 4, 4, 3, 2, 1];

// worked but very long
function sort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let doSwap = arr[i] > arr[i + 1];

    if (doSwap) {
      let temp;
      let x = i;
      let y = i + 1;
      while (0 <= x) {
        let swapCondition = arr[x] > arr[y];
        console.log("x ::", x);
        if (swapCondition) {
          temp = arr[x];
          arr[x] = arr[y];
          arr[y] = temp;
          console.log("arr :: ", arr);
        }
        y = x;
        x--;
      }
    }
  }
  return arr;
}

console.log("result ::", sort(data));

function providedButSwap(arr) {
  // insertion sort if find, loop backward
  let numOFlooping = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    let temp;
    for (let j = i; j >= 0; j--) {
      // console.log("i j ::", j, j + 1, arr);
      numOFlooping++;
      console.log("numOFlooping ::", numOFlooping);
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      } else {
        break;
      }
    }
  }
  return arr;
}

console.log("result ::", providedButSwap(data));

function providedSolution(arr) {
  let numOFlooping = 0;
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    numOFlooping++;

    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
      numOFlooping++;
    }
    console.log("numOFlooping ::", numOFlooping);
    arr[j + 1] = currentVal;
  }
  return arr;
}

console.log("result ::", providedSolution(data));

function native(arr) {
  let numOFlooping = 0;
  return arr.sort((a, b) => {
    numOFlooping++;
    console.log("numOFlooping ::", numOFlooping);
    if (a > b) {
      return 1;
    } else {
      return -1;
    }
  });
}

console.log("result ::", native(data));
