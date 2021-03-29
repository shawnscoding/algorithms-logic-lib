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

reverse(1534236469);
var t1 = performance.now();
console.log("took " + (t1 - t0) + " milliseconds.");

var t3 = performance.now();

var reverse = function (x) {
  const xStrArr = Math.abs(x).toString().split("");
  const reversStr = xStrArr.reverse().join("");
  return;
};

reverse(1534236469);
var t4 = performance.now();
console.log("took " + (t4 - t3) + " milliseconds.");
