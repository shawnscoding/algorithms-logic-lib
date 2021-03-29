var romanToInt = function (s) {
  //     1 5 10 50 100 500 1000

  // if not I add corrosponding int
  // if i + 1 is bigger than or equal to i, subtract i from i + 1

  const dics = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    let next = s[i + 1];

    if (dics[char] < dics[next]) {
      // console.log("called");
      result += dics[next] - dics[char];
      i++;
    } else {
      result += dics[char];
    }
  }

  return result;
};

console.log(romanToInt("III"));

// const legend = {
//   I:1,
//   V:5,
//   X:10,
//   L:50,
//   C:100,
//   D:500,
//   M:1000
// };
// let total = 0;

// for (let i = 0; i < s.length; i++) {
//   if (legend[s[i]] < legend[s[i+1]]) {
//     total += legend[s[i+1]] - legend[s[i]];
//     i++;
//   } else {
//     total += legend[s[i]];
//   }
// }

// return total;
// };
