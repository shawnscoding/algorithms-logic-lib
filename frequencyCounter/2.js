// frequency counter / multiple pointers - areThereDuplicates

// implement a function called areThereDuplicates which accepts a variable number of arguments, and checks
// whether there are any duplicates among the arguments passed in. you can solve this using the frequency counter
// pattern OR the multiple pointers pattern.
// - use set since it doesn't contain duplicate value
// - add all items in args to set
// - compare length

const areThereDuplicates = (...args) => {
  let set = new Set(args);
  return set.size !== args.length;
};

//(Frequency Counter)
// function areThereDuplicates() {
//   let collection = {};
//   console.log("arguments :", arguments);
//   for (let val in arguments) {
//     collection[arguments[val]] = (collection[arguments[val]] || 0) + 1;
//   }
//   for (let key in collection) {
//     if (collection[key] > 1) return true;
//   }
//   return false;
// }

// areThereDuplicates Solution (Multiple Pointers)
function areThereDuplicates(...args) {
  // Two pointers
  args.sort((a, b) => a > b);
  let start = 0;
  let next = 1;
  while (next < args.length) {
    if (args[start] === args[next]) {
      return true;
    }
    start++;
    next++;
  }
  return false;
}

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2, 6, 6, 7, 8, 9, 123, 21)); // true
console.log(areThereDuplicates("a", "b", "c", "a")); // true
