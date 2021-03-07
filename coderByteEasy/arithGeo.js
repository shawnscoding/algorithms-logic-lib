// Have the function ArithGeo(arr) take the array of numbers stored in arr and return the string "Arithmetic" if the sequence follows an arithmetic pattern or return "Geometric" if it follows a geometric pattern. If the sequence doesn't follow either pattern return -1. An arithmetic sequence is one where the difference between each of the numbers is consistent, where as in a geometric sequence, each term after the first is multiplied by some constant or common ratio. Arithmetic example: [2, 4, 6, 8] and Geometric currentVal -= operand
// wrong
// function ArithGeo(arr) {
//   let result = "";

//   for (let i = 0; i < arr.length; i++) {
//     if (i !== 0) {
//       let difference = Math.abs(arr[0] - arr[1]);
//       if (arr[i] === arr[i - 1] + difference) {
//         result = "Arithmetic";
//       } else {
//         result = -1;
//         break;
//       }
//     }
//   }

//   if (result === "Arithmetic") return result;
//   for (let i = 0; i < arr.length; i++) {
//     if (i !== 0) {
//       let currentVal = arr[i];
//       if (arr[i - 1] > currentVal) {
//         result = -1;
//         break;
//       }

//       while (arr[i - 1] < currentVal) {
//         // -10, 20
//         let operand = arr[i - 1];

//         if (0 < operand) {
//           currentVal -= operand;
//         } else {
//           currentVal += operand;
//         }

//         if (arr[i - 1] === currentVal) {
//           result = "Geometric";
//         } else {
//           result = -1;
//         }
//       }
//     }
//   }

//   // code goes here
//   return result;
// }

// // keep this function call here
// console.log(ArithGeo(readline()));

function ArithGeo(arr) {
  // code goes here
  var isArith = function (arr) {
    if (arr.length < 2) return -1;
    var difference = arr[1] - arr[0];
    for (var i = 1; i < arr.length - 1; i++) {
      if (arr[i + 1] - arr[i] !== difference) return false;
    }
    return true;
  };

  var isGeo = function (arr) {
    if (arr.length < 2) return -1;
    var multiplier = arr[1] / arr[0];
    for (var i = 1; i < arr.length - 1; i++) {
      if (arr[i + 1] / arr[i] !== multiplier) return false;
    }
    return true;
  };

  if (isArith(arr)) return "Arithmetic";
  else if (isGeo(arr)) return "Geometric";
  else return -1;
}

// keep this function call here
// to see how to enter arguments in JavaScript scroll down
ArithGeo(readline());
