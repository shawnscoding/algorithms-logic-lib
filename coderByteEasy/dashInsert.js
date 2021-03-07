// Dash Insert
function isOdd(num) {
  if (isNaN(num)) return false;
  return num % 2 === 0 ? false : true;
}

function DashInsert(str) {
  //  Don't count zero as an odd number
  // copy arr for loop
  // tell if it's odd not zero
  // if it is, convert arr and splice() and join
  let copied = str;
  let numOfInsertions = 0;
  for (let i = 0; i < copied.length; i++) {
    if (
      Number(copied[i]) !== 0 &&
      isOdd(Number(copied[i])) &&
      isOdd(Number(copied[i + 1]))
    ) {
      let division = i + numOfInsertions + 1;
      str = str.slice(0, division) + "-" + str.slice(division);
      numOfInsertions++;
    }
  }
  return str;
}

console.log(DashInsert("333"));
