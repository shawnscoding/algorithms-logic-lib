// Star Rating
// Have the function StarRating(str) take the str parameter being passed which will be an average rating between 0.00 and 5.00, and convert this rating into a list of 5 image names to be displayed in a user interface to represent the rating as a list of stars and half stars. Ratings should be rounded to the nearest half. There are 3 image file names available: "full.jpg", "half.jpg", "empty.jpg". The output will be the name of the 5 images (without the extension), from left to right, separated by spaces. For example: if str is "2.36" then this should be displayed by the following image:

// So your program should return the string "full full half empty empty".
// Examples
// Input: "0.38"
// Output: half empty empty empty empty
// Input: "4.5"
// Output: full full full full half
// Tags
// string manipulationencodingback-endmobileAndroidiOS

// best solution
function StarRating(str) {
  let a = Math.round(Number(str) * 2);
  let full = (a - (a % 2)) / 2;
  let half = a % 2;
  let empty = 5 - full - half;
  let s = "full ".repeat(full) + "half ".repeat(half) + "empty ".repeat(empty);
  return s.trim();
}

// keep this function call here
StarRating("4.40");

// my solution
function StarRating(str) {
  // multiply 100
  // max 500 min 0
  let num = Number(str) * 100;
  let list = [];
  for (let i = 0; i < 11; i++) {
    let item = 50;
    list.push(item * i);
  }
  let diff = Infinity;
  let nearestVal;
  for (let i = 0; i < list.length; i++) {
    let res = Math.abs(list[i] - num);

    if (diff >= res) {
      diff = res;

      nearestVal = list[i];
    }
  }

  let count = 5;
  let result = "";
  while (count !== 0) {
    if (nearestVal === 50) {
      result += "half ";
      nearestVal -= 50;
    } else if (nearestVal >= 100) {
      result += "full ";
      nearestVal -= 100;
    } else {
      result += "empty ";
    }
    count--;
  }

  return result.trim();
}

console.log(StarRating(readline()));
