// Equivalent Keypresses
// Have the function EquivalentKeypresses(strArr) read the array of strings stored in strArr which will contain 2 strings representing two comma separated lists of keypresses. Your goal is to return the string true if the keypresses produce the same printable string and the string false if they do not. A keypress can be either a printable character or a backspace represented by -B. You can produce a printable string from such a string of keypresses by having backspaces erase one preceding character.
// Examples
// Input: ["a,b,c,d", "a,b,c,d,-B,d"]
// Output: true
// Input: ["c,a,r,d", "c,a,-B,r,d"]
// Output: false
// Tags
// arrayGoogle

function EquivalentKeypresses(strArr) {
  let presses1 = strArr[0].split(",");
  let presses2 = strArr[1].split(",");
  let longerLength =
    presses1.length > presses2.length ? presses1.length : presses2.length;
  for (let i = 0; i < longerLength; i++) {
    if (presses1[i] === "-B") {
      if (presses1[i - 1]) presses1.splice(i - 1, 2);
      else presses1.splice(i, 1);
    }
    if (presses2[i] === "-B") {
      if (presses2[i - 1]) presses2.splice(i - 1, 2);
      else presses2.splice(i, 1);
    }
  }

  // code goes here
  return presses1.join(",") === presses2.join(",") ? "true" : "false";
}
