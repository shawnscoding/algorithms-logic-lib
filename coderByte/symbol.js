function SimpleSymbols(str) {
  // The string will not be empty and will have at least one letter.
  if (!str.length) return false;
  let validated = true;
  for (let i = 0; i < str.length; i++) {
    let isStr = str[i].match(/[a-zA-Z]/);

    if (isStr) {
      if (str[i - 1] === "+" && str[i + 1] === "+") {
      } else {
        validated = false;
      }
    }
  }

  // code goes here
  return validated;
}

// keep this function call here
// console.log(SimpleSymbols("+d+=3=+s+"));
console.log(SimpleSymbols("f++d+"));
