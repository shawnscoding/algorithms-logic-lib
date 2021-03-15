// Caesar Cipher
// Have the function CaesarCipher(str,num) take the str parameter and perform a Caesar Cipher shift on it using the num parameter as the shifting number. A Caesar Cipher works by shifting each letter in the string N places in the alphabet (in this case N will be num). Punctuation, spaces, and capitalization should remain intact. For example if the string is "Caesar Cipher" and num is 2 the output should be "Ecguct Ekrjgt".
// Examples
// Input: "Hello" & num = 4
// Output: Lipps
// Input: "abc" & num = 0
// Output: abc
// Tags
// string manipulationencodinghash tableMicrosoft

function CaesarCipher(str, num) {
  // 97~122
  // 65~90
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (!str[i].match(/[a-zA-Z]/g)) {
      result += str[i];
      continue;
    }
    let code = str.charCodeAt(i) + num;
    if ((code <= 122 && code >= 97) || (65 <= code && code <= 90)) {
      result += String.fromCharCode(code);
    } else {
      if (str.charCodeAt(i) <= 90) {
        // means it's lowercase
        let reminder = code - 91;

        result += String.fromCharCode(65 + reminder);
      } else {
        // means it's uppercase
        let reminder = code - 123;
        result += String.fromCharCode(97 + reminder);
      }
    }
  }

  return result;
}

// keep this function call here
console.log(CaesarCipher(readline()));
