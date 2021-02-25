// best solution
function DistinctCharacters(str) {
  let chars = new Set(str);
  return chars.size >= 10 ? "true" : "false";
}
DistinctCharacters(readline());

// my solution not bad
function DistinctCharacters(str) {
  const dic = {};
  for (let i = 0; i < str.length; i++) {
    if (!dic[str[i]]) dic[str[i]] = true;
  }
  return (Object.keys(dic).length >= 10).toString();
}

console.log(DistinctCharacters(readline()));
