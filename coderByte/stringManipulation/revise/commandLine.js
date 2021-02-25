// function CommandLine(str) {
//   const arr = [];
//   const startIdxes = [];
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === "=") {
//       str = str.slice(0, i);
//       str = sliced.match(/\w+/g);
//       let params = res[res.length - 1];
//       arr.push(params.length.toString());

//       startIdxes.push([i - params.length, i]);
//     }
//   }

//   let result = arr.map((item, i) => {
//     if (i === arr.length - 1)
//       item += "=" + (str.length - startIdxes[i][1] - 1).toString();
//     else item += "=" + (startIdxes[i + 1][0] - startIdxes[i][1] - 2).toString();
//     return item;
//   });
//   // code goes here
//   return result.join(" ");
// }

function CommandLine(str) {
  str = str.toLowerCase();
  console.log("str ::", str);
  str = str.replace(/ ([a-z]+)=/g, "|$1=");
  console.log("str ::", str);
  let cmdArr = str.split("|");
  let length = cmdArr.length;
  let retval = "";
  for (let i = 0; i < length; i++) {
    let foo = cmdArr[i].split("=");
    retval += foo[0].length + "=" + foo[1].length + " ";
  }
  return retval.substring(0, retval.length - 1);
}
// keep this function call here

// keep this function call here
console.log(
  CommandLine(
    "SampleNumber=3234 provider=Dr. M. Welby patient=John Smith priority=High"
  )
);
