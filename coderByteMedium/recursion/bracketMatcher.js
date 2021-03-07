// Bracket Matcher
// Have the function BracketMatcher(str) take the str parameter being passed and return 1 if the brackets are correctly matched and each one is accounted for. Otherwise return 0. For example: if str is "(hello (world))", then the output should be 1, but if str is "((hello (world))" the the output should be 0 because the brackets do not correctly match up. Only "(" and ")" will be used as brackets. If str contains no brackets return 1.
// Examples
// Input: "(coder)(byte))"
// Output: 0
// Input: "(c(oder)) b(yte)"
// Output: 1
// Tags
// searchingstackrecursionfreevideo

function countBracket(str, idx, open, length) {
  if (length === 0) return open === 0 ? 1 : 0;
  if (open < 0) return 0;
  if (str[idx] === "(") {
    open++;
  } else if (str[idx] === ")") {
    open--;
  }
  return countBracket(str, idx + 1, open, legnth - 1);
}

function BracketMatcher(str) {
  return countBracket(str, 0, 0, str.length);
}

console.log(BracketMatcher("hello()"));
