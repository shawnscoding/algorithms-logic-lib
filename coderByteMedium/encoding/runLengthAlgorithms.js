// Run Length
// HIDE QUESTION
// Have the function RunLength(str) take the str parameter being passed and return a compressed version of the string using the Run-length encoding algorithm. This algorithm works by taking the occurrence of each repeating character and outputting that number along with a single character of the repeating sequence. For example: "wwwggopp" would return 3w2g1o2p. The string will not contain any numbers, punctuation, or symbols.

// Use the Parameter Testing feature in the box below to test your code with different arguments.

const spliceString = (str, index, count, add) => {
  // We cannot pass negative indexes directly to the 2nd slicing operation.
  if (index < 0) {
    index = str.length + index;
    if (index < 0) {
      index = 0;
    }
  }

  return str.slice(0, index) + (add || "") + str.slice(index + count);
};

function RunLength(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    if (result[result.length - 1] === str[i]) {
      let num = Number(result[result.length - 2]) + 1;
      result = spliceString(result, result.length - 2, 1, num.toString());
    } else result += `1${str[i]}`;
  }
  return result;
}

// keep this function call here
console.log(RunLength(readline()));
