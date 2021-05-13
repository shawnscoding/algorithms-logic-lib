const convertToBase7 = (num) => {
  let digits = [];
  let pos = true;
  if (num === 0) return "0";
  if (num < 0) pos = false;
  num = Math.abs(num);

  while (num !== 0) {
    digits.unshift((num % 7).toString());
    num = Math.floor(num / 7);
  }
  if (!pos) digits.unshift("-");

  return digits.join("");
};

const convertToBase7Easy = (num) => {
  return num.toString(7);
};

console.log(convertToBase7Easy(10));

const convertToBase8 = (num) => {
  let digits = [];
  let pos = true;
  if (num === 0) return "0";
  if (num < 0) pos = false;
  num = Math.abs(num);

  while (num !== 0) {
    digits.unshift((num % 8).toString());
    num = Math.floor(num / 8);
  }
  if (!pos) digits.unshift("-");

  return digits.join("");
};

const convertToBase8Easy = (num) => {
  return num.toString(8);
};

console.log(convertToBase8(16));

const convertToBase16 = (num) => {
  let digits = [];
  let pos = true;
  if (num === 0) return "0";
  if (num < 0) pos = false;
  num = Math.abs(num);

  while (num !== 0) {
    let digit = (num % 16).toString();
    if (digit === "10") digit = "a";
    else if (digit === "11") digit = "b";
    else if (digit === "12") digit = "c";
    else if (digit === "13") digit = "d";
    else if (digit === "14") digit = "e";
    else if (digit === "15") digit = "f";

    digits.unshift(digit);
    num = Math.floor(num / 16);
  }
  if (!pos) digits.unshift("-");

  return digits.join("");
};

const convertToBase16Easy = (num) => {
  return num.toString(16);
};

console.log(convertToBase16(40));
console.log(convertToBase16Easy(40));

const convertToBase2 = (num) => {
  let digits = [];
  let pos = true;
  if (num === 0) return "0";
  if (num < 0) pos = false;
  num = Math.abs(num);

  while (num !== 0) {
    digits.unshift((num % 2).toString());
    num = Math.floor(num / 2);
  }
  if (!pos) digits.unshift("-");

  return digits.join("");
};

const convertToBase2Easy = (num) => {
  return num.toString(2);
};

console.log(convertToBase2(4));
console.log(convertToBase2Easy(6));
