// easy
// Camel Case
// Have the function CamelCase(str) take the str parameter being passed and return it in proper camel case format where the first letter of each word is capitalized (excluding the first letter). The string will only contain letters and some combination of delimiter punctuation characters separating each word.

// For example: if str is "BOB loves-coding" then your program should return the string bobLovesCoding.
// Examples
// Input: "cats AND*Dogs-are Awesome"
// Output: catsAndDogsAreAwesome
// Input: "a b c d-e-f%g"
// Output: aBCDEFG
// Tags
// string manipulationregular expressionback-endmobileAndroidiOS

// best solution
function CamelCase(str) {
  var arr = str.toLowerCase().split(/W/);
  return (
    arr[0] +
    arr
      .slice(1)
      .map((item) => item[0].toUpperCase() + item.slice(1))
      .join("")
  );
}
CamelCase(readline());

// my solution
function CamelCase(str) {
  // use rge
  let strs = str.replace(/[^A-Za-z]/g, " ").split(" ");
  for (let i = 0; i < strs.length; i++) {
    if (i !== 0) {
      let lowerCase = strs[i].toLowerCase();
      let catpitalized = lowerCase[0].toUpperCase() + lowerCase.slice(1);
      strs.splice(i, 1, catpitalized);
    } else {
      let lowerCase = strs[i].toLowerCase();
      strs.splice(i, 1, lowerCase);
    }
  }

  return strs.join("");
}

// keep this function call here
console.log(CamelCase(readline()));
