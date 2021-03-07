// Number Addition
// Have the function NumberSearch(str) take the str parameter, search for all the numbers in the string, add them together, then return that final number. For example: if str is "88Hello 3World!" the output should be 91. You will have to differentiate between single digit numbers and multiple digit numbers like in the example above. So "55Hello" and "5Hello 5" should return two different answers. Each string will contain at least one letter or symbol.
// Examples
// Input: "75Number9"
// Output: 84
// Input: "10 2One Number*1*"
// Output: 13
// Tags
// searchingregular expression

// top rated answer
function NumberAddition(str) {
  var numbers = str.match(/\d+/g).map((num) => parseInt(num));
  var sum = numbers.reduce((a, b) => a + b);
  return sum;
}

// time complexity O(n)
console.log(NumberAddition("12321hedllo11"));

// mine, pretty much rubish
// function NumberAddition(str) {
//   // identify num
//   str.split(" ").join("");
//   let stack = [];
//   for (let i = 0; i < str.length; i++) {
//     let char = str.charAt(i);

//     // if num, check if it is multiple digits
//     if (char.match(/[0-9]/g)) {
//       // store nums to new arr
//       stack.push(char);
//       while (str.charAt(i + 1) && str.charAt(i + 1).match(/[0-9]/g)) {
//         let poppedNum = stack.pop();
//         stack.push(poppedNum + str.charAt(i + 1));
//         i++;
//       }
//     }
//   }

//   // and add it and return it
//   if (!stack.length) return 0;
//   return stack.reduce((a, b) => Number(a) + Number(b));
// }
