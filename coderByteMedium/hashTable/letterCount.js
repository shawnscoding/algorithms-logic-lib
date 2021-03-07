// Letter Count
// Have the function LetterCount(str) take the str parameter being passed and return the first word with the greatest number of repeated letters. For example: "Today, is the greatest day ever!" should return greatest because it has 2 e's (and 2 t's) and it comes before ever which also has 2 e's. If there are no words with repeating letters return -1. Words will be separated by spaces.
// Examples
// Input: "Hello apple pie"
// Output: Hello
// Input: "No words"
// Output: -1
// Tags
// searchinghash table

function LetterCount(str) {
  // seperate three str
  // obj count

  let strArr = str.split(" ");
  let sets = [];
  let reference = { idx: undefined, max: 1 };
  for (let i = 0; i < strArr.length; i++) {
    let obj = {};
    for (let j = 0; j < strArr[i].length; j++) {
      let insert;
      if (!obj[strArr[i][j]]) {
        insert = 1;
      } else if (obj[strArr[i][j]]) {
        insert = obj[strArr[i][j]] + 1;
      }
      obj[strArr[i][j]] = insert;
      if (reference.max < insert) {
        reference.max = insert;
        reference.idx = i;
      }
    }
    obj.value = strArr[i];
    sets.push(obj);
  }

  if (reference.max === 1) return -1;
  return sets[reference.idx].value;
}

// keep this function call here
console.log(LetterCount(readline()));
