// Stock Picker
// Have the function StockPicker(arr) take the array of numbers stored in arr which will contain integers that represent the amount in dollars that a single stock is worth, and return the maximum profit that could have been made by buying stock on day x and selling stock on day y where y > x. For example: if arr is [44, 30, 24, 32, 35, 30, 40, 38, 15] then your program should return 16 because at index 2 the stock was worth $24 and at index 6 the stock was then worth $40, so if you bought the stock at 24 and sold it at 40, you would have made a profit of $16, which is the maximum profit that could have been made with this list of stock prices.

// If there is not profit that could have been made with the stock prices, then your program should return -1. For example: arr is [10, 9, 8, 2] then your program should return -1.
// Examples
// Input: [10,12,4,5,9]
// Output: 5
// Input: [14,20,4,12,5,11]
// Output: 8
// Tags
// arraysearching optimization data science data engineer

// best time complexity O(N)
function StockPicker(arr) {
  var profit = -1;
  var buyPrice = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] < buyPrice) {
      buyPrice = arr[i];
    } else if (arr[i] - buyPrice > profit) {
      profit = arr[i] - buyPrice;
    }
  }

  // code goes here
  return profit;
}

// keep this function call here
StockPicker(readline());

function getProfit(arr, maxProfit) {
  if (arr.length === 1) return maxProfit;
  const min = arr.reduce((acc, item) => {
    if (acc > item) return (acc = item);
    return acc;
  }, Infinity);
  let start = arr.indexOf(min) + 1;

  for (start; start < arr.length; start++) {
    let res = arr[start] - min;
    if (maxProfit < res) maxProfit = res;
  }
  arr.splice(arr.indexOf(min), 1);

  return getProfit(arr, maxProfit);
}

function StockPicker(arr) {
  let maxProfit = -1;
  return getProfit(arr, maxProfit);
}

console.log(StockPicker(readline()));
