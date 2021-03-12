// Multiple Brackets
// Have the function MultipleBrackets(str) take the str parameter being passed and return 1 #ofBrackets if the brackets are correctly matched and each one is accounted for. Otherwise return 0. For example: if str is "(hello [world])(!)", then the output should be 1 3 because all the brackets are matched and there are 3 pairs of brackets, but if str is "((hello [world])" the the output should be 0 because the brackets do not correctly match up. Only "(", ")", "[", and "]" will be used as brackets. If str contains no brackets return 1.
// Examples
// Input: "(coder)[byte)]"
// Output: 0
// Input: "(c([od]er)) b(yt[e])"
// Output: 1 5
// Tags
// searchingstack

function MultipleBrackets(str) {
  // count (), [], {}
  // should be three corrosponding counts
  // if length is -1, return 0
  // if open bracket, push 1
  // if open bracket, pop()

  let stack1 = [];
  let stack2 = [];
  let stack3 = [];
  let count = 0;

  // TC:  O(N)
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ")" && stack1.length === 0) return 0;
    if (str[i] === "]" && stack2.length === 0) return 0;
    if (str[i] === "}" && stack3.length === 0) return 0;

    if (str[i] === "(") stack1.push(1);
    if (str[i] === "[") stack2.push(1);
    if (str[i] === "{") stack3.push(1);

    if (str[i] === ")") {
      stack1.pop();
      count++;
    }
    if (str[i] === "]") {
      stack2.pop();
      count++;
    }
    if (str[i] === "}") {
      stack3.pop();
      count++;
    }
  }

  if (stack1.length > 0 || stack2.length > 0 || stack3.length > 0) return 0;

  return `1 ${count}`;
}

console.log(MultipleBrackets(readline()));
