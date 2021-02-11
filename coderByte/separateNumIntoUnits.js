function separateNumberIntoUnits(n) {
  if (n == 0) return [0];
  // n = Math.floor(n); // needed for decimal numbers
  var arr = [];
  var i = 1;

  while (n > 0) {
    arr.unshift((n % 10) * i);
    n = Math.floor(n / 10);
    i *= 10;
  }

  return arr;
}
// n = 123 i = 10; arr = [4]
// n = 12 i = 100; arr = [30]
// n = 2 i = 1000; arr = [200]
// n = 0.1 i = 10000; arr = [1000, 200, 30, 4]

console.log(separateNumberIntoUnits(1234));
