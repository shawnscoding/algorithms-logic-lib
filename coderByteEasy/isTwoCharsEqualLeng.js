function ExOh(str) {
  let xCount = 0;
  let oCount = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "o") {
      oCount++;
    }
    if (str[i] === "x") {
      xCount++;
    }
  }

  // code goes here
  if (xCount === oCount) return true;
  return false;
}

// keep this function call here
console.log(ExOh(readline()));
