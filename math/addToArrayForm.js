var addToArrayForm = function (num1, K) {
  //    define i, carry, the right-most d from k

  let carry = 0;
  let i = num1.length - 1;

  while (carry || K) {
    let d = K % 10;
    if (i >= 0) {
      num1[i] += carry + d;
      carry = num1[i] > 9 ? 1 : 0;
      num1[i] %= 10;

      i--;
    } else {
      const p = d + carry;
      carry = p > 9 ? 1 : 0;
      num1.unshift(p % 10);
    }
    K = Math.trunc(K / 10);
  }

  return num1;
};
