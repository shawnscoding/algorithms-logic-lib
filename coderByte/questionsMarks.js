// Have the function QuestionsMarks(str) take the str string parameter,
// which will contain single digit numbers, letters, and question marks, and
// check if there are exactly 3 question marks between every pair of two numbers that add up to 10.
// If so, then your program should return the string true, otherwise it should return the string false.
//  If there aren't any two numbers that add up to 10 in the string, then your program should return false as well.

// For example: if str is "arrb6???4xxbl5???eee5" then your program should return true
//  because there are exactly 3 question marks between 6 and 4, and 3 question marks between 5 and 5 at the end of the string.

// function QuestionsMarks(str) {
//   let threeMarks = [];
//   let filterChar = str.split("").filter((char) => !/[a-zA-Z]/.test(char));
//   for (let i = 0; i < filterChar.length; i++) {
//     if (
//       filterChar[i] === "?" &&
//       filterChar[i + 1] === "?" &&
//       filterChar[i + 2] === "?"
//     ) {
//       threeMarks.push(i);
//     }
//   }

//   const filtered = filterChar.filter((i) => i !== "?");
//   for (let i = 0; i < threeMarks.length; i++) {
//     let operation = Number(filtered[i * 2]) + Number(filtered[i * 2 + 1]) <= 10;
//     if (operation) {
//       return true;
//       //  01 23 45
//       // 12 34 56
//     }
//   }

//   // code goes here
//   return false;
// }

// // keep this function call here
// console.log(QuestionsMarks(''));

function QuestionsMarks(str) {
  res = false;
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (Number(str[i]) + Number(str[j]) === 10) {
        res = true;
        // console.log("str.slice(i,j).split(`?`) ::", str.slice(i, j).split("?"));
        if (str.slice(i, j).split("?").length - 1 < 3) {
          return false;
        }
      }
    }
  }
  return res;
}

// keep this function call here
console.log(QuestionsMarks("46??ds?"));
