// Have the function ArithGeo(arr) take the array of numbers stored in arr and return the string "Arithmetic" if the sequence follows an arithmetic pattern or return "Geometric" if it follows a geometric pattern. If the sequence doesn't follow either pattern return -1. An arithmetic sequence is one where the difference between each of the numbers is consistent, where as in a geometric sequence, each term after the first is multiplied by some constant or common ratio. Arithmetic example: [2, 4, 6, 8] and Geometric currentVal -= operand
function ArithGeo(arr) {
  let result = "";

  for (let i = 0; i < arr.length; i++) {
    if (i !== 0) {
      let operand = Math.abs(arr[0] - arr[1]);
      if (arr[i] === arr[i - 1] + operand) {
        result = "Arithmetic";
      } else {
        result = -1;
        break;
      }
    }
  }

  if (result === "Arithmetic") return result;
  for (let i = 0; i < arr.length; i++) {
    if (i !== 0) {
      let currentVal = arr[i];
      if (arr[i - 1] > currentVal) {
        result = -1;
        break;
      }

      while (arr[i - 1] < currentVal) {
        // -10, 20
        let operand = arr[i - 1];

        if (0 < operand) {
          currentVal -= operand;
        } else {
          currentVal += operand;
        }

        if (arr[i - 1] === currentVal) {
          result = "Geometric";
        } else {
          result = -1;
        }
      }
    }
  }

  // code goes here
  return result;
}

// keep this function call here
console.log(ArithGeo(readline()));
