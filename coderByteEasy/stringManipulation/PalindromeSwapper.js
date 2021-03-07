String.prototype.splice = function (index, count, add) {
  return this.slice(0, index) + (add || "") + this.slice(index + count);
};

function PalindromeSwapper(str) {
  for (let i = 0; i < str.length - 1; i++) {
    let res = str.splice(i, 1, str[i + 1]);
    let res2 = res.splice(i + 1, 1, str[i]);
    if (res2 === res2.split("").reverse().join("")) return res2;
  }
  return -1;
}

// keep this function call here
console.log(PalindromeSwapper("rcaecar"));
