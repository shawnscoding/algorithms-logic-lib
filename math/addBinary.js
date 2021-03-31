// logic gates
function xor(a, b) {
  return a === b ? 0 : 1;
}

function and(a, b) {
  return a == 1 && b == 1 ? 1 : 0;
}

function or(a, b) {
  return a || b;
}

function halfAdder(a, b) {
  const sum = xor(a, b);
  const carry = and(a, b);
  return [sum, carry];
}

function fullAdder(a, b, carry) {
  halfAdd = halfAdder(a, b);
  const sum = xor(carry, halfAdd[0]);
  carry = and(carry, halfAdd[0]);
  carry = or(carry, halfAdd[1]);
  return [sum, carry];
}

function padZeroes(a, b) {
  const lengthDifference = a.length - b.length;
  switch (lengthDifference) {
    case 0:
      break;
    default:
      const zeroes = Array.from(Array(Math.abs(lengthDifference)), () =>
        String(0)
      );
      if (lengthDifference > 0) {
        // if a is longer than b
        // then we pad b with zeroes
        b = `${zeroes.join("")}${b}`;
      } else {
        // if b is longer than a
        // then we pad a with zeroes
        a = `${zeroes.join("")}${a}`;
      }
  }
  return [a, b];
}

function addBinary(a, b) {
  let sum = "";
  let carry = "";

  const paddedInput = padZeroes(a, b);
  a = paddedInput[0];
  b = paddedInput[1];

  for (let i = a.length - 1; i >= 0; i--) {
    if (i == a.length - 1) {
      // half add the first pair
      const halfAdd1 = halfAdder(a[i], b[i]);
      sum = halfAdd1[0] + sum;
      carry = halfAdd1[1];
    } else {
      // full add the rest
      const fullAdd = fullAdder(a[i], b[i], carry);
      sum = fullAdd[0] + sum;
      carry = fullAdd[1];
    }
  }
  return carry ? carry + sum : sum;
}
