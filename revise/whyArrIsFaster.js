const { PerformanceObserver, performance } = require("perf_hooks");

var t0 = performance.now();

var reverse = function (x) {
  x = x.toString();
  result = "";
  for (let i = x.length - 1; i >= 0; i--) {
    result += x[i];
  }
  return;
};

reverse(1534236469233214213123125324213435236432);
var t1 = performance.now();
console.log("took " + (t1 - t0) + " milliseconds.");

// var t3 = performance.now();

// var reverse = function (x) {
//   const xStrArr = Math.abs(x).toString().split("");
//   const reversStr = xStrArr.reverse().join("");
//   return;
// };

// reverse(1534236469233214213123125324213435236432);
// var t4 = performance.now();
// console.log("took " + (t4 - t3) + " milliseconds.");

// If you express complexity using the O notation, you should know that O(n) === O(3n), so beyond having linear time complexity, either could be faster.
// Plus, result += x[i]; inside a loop is a sub-optimal way to construct a string as it keeps having to grow the memory required and copy the string to the new memory location. – jfriend00
// FYI, because strings are immutable in Javascript (you can't modify an existing string, you can only create a new one that contains a modification), the language tends to not be very efficient at doing your own string manipulation in Javascript, particularly any type of building a string in a loop. – jfriend00
