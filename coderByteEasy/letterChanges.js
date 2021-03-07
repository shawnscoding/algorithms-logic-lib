String.prototype.replaceAt = function (index, replacement) {
  if (index >= this.length) {
    return this.valueOf();
  }

  return this.substring(0, index) + replacement + this.substring(index + 1);
};

function LetterChanges(str) {
  // use charCodeAt
  let res = "";
  for (let i = 0; i < str.length; i++) {
    let isStr = str[i].match(/[a-zA-Z]+/g);
    if (isStr) {
      let code = str.charCodeAt(i) + 1;
      let char = String.fromCharCode(code);

      if (
        char === "a" ||
        char === "e" ||
        char === "i" ||
        char === "o" ||
        char === "u"
      ) {
        char = char.toUpperCase();
      }
      res += str.replaceAt(i, char)[i];
    } else {
      res += str[i];
    }
  }

  // code goes here
  return res;
}

// keep this function call here
// console.log(LetterChanges(readline()));
