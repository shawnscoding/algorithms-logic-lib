function LetterCapitalize(str) {
  let result = str
    .split(" ")
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.substr(1);
    })
    .join(" ");
  // code goes here

  return result;
}

// keep this function call here
LetterCapitalize("how are you");
