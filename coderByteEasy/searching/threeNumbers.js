// Three Numbers
// Have the function ThreeNumbers(str) take the str parameter being passed and determine if exactly three unique, single-digit integers occur within each word in the string. The integers can appear anywhere in the word, but they cannot be all adjacent to each other. If every word contains exactly 3 unique integers somewhere within it, then return the string true, otherwise return the string false. For example: if str is "2hell6o3 wor6l7d2" then your program should return "true" but if the string is "hell268o w6or2l4d" then your program should return "false" because all the integers are adjacent to each other in the first word.
// Examples
// Input: "2a3b5 w1o2rl3d g1gg92"
// Output: true
// Input: "21aa3a ggg4g4g6ggg"
// Output: false
// Tags
// string manipulationregular expression

function ThreeNumbers(str) {
  // get words list
  // detect adjacent using {}
  // filter none number
  // detect if it's unique using {}
  let strArr = str.split(" ");
  const adjacentDetector = {};

  for (let i = 0; i < strArr.length; i++) {
    const unique = {};
    for (let j = 0; j < strArr[i].length; j++) {
      const val = strArr[i][j];
      let NaN = isNaN(Number(val));

      if (NaN) {
        adjacentDetector[i] = [];
      } else {
        if (!adjacentDetector[i]) {
          adjacentDetector[i] = [val];
        } else {
          adjacentDetector[i].push(val);
        }

        if (unique[val]) return "false";
        unique[val] = true;
      }
      if (adjacentDetector[i].length === 3) return "false";
    }
    if (Object.keys(unique).length !== 3) return "false";
  }

  return "true";
}

console.log(ThreeNumbers("21aa3a ggg4g4g6ggg"));

// most welcomed sollution
function ThreeNumbers(str) {
  var words = str.split(" ");
  return words.every(uniqueThree);
}

function uniqueThree(str) {
  var nums = str.match(/[0-9]+/g);
  if (nums === null || nums.length === 1 || nums.length > 3) {
    return false;
  } else {
    nums = nums.join("");
  }

  if (nums.length !== 3) {
    return false;
  } else {
    return nums[1] !== nums[2] && nums[2] !== nums[3] && nums[1] !== nums[3];
  }
}

// keep this function call here
ThreeNumbers(readline());
