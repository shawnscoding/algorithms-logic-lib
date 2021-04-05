// var addToArrayForm = function (A, K) {
//   let i = A.length - 1;
//   let carry = 0;
//   while (K || carry) {
//     const d = K % 10;
//     if (i >= 0) {
//       A[i] = A[i] + d + carry;
//       carry = A[i] > 9 ? 1 : 0;
//       A[i] = A[i] % 10;
//       i--;
//     } else {
//       const p = d + carry;
//       carry = p > 9 ? 1 : 0;
//       A.unshift(p % 10);
//     }
//     K = Math.trunc(K / 10);
//   }
//   return A;
// };

var addToArrayForm = function (num1, num2) {
  i = 0;
  while (i) {
    console.log("call");
  }
};

console.log(addToArrayForm([2, 1, 5], 806));
