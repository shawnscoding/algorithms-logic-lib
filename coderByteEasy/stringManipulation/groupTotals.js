// Have the function GroupTotals(strArr) read in the strArr parameter containing key:value pairs where the key is a string and the value is an integer. Your program should return a string with new key:value pairs separated by a comma such that each key appears only once with the total values summed up.

// For example: if strArr is ["B:-1", "A:1", "B:3", "A:5"] then your program should return the string A:6,B:2.

// Your final output string should return the keys in alphabetical order. Exclude keys that have a value of 0 after being summed up.

// Use the Parameter Testing feature in the box below to test your code with different arguments.

function GroupTotals(strArr) {
  let storage = {};
  for (let i = 0; i < strArr.length; i++) {
    let arr = strArr[i].match(/[a-zA-Z0-9-]+/g);
    if (!storage[arr[0]]) storage[arr[0]] = +arr[1];
    else storage[arr[0]] += +arr[1];
  }

  let result = [];
  let sortedKeys = Object.keys(storage).sort();
  for (const key of sortedKeys) {
    if (storage[key] === 0) continue;
    else result.push(`${key}:${storage[key]}`);
  }

  return result.join(",");
}

// keep this function call here
console.log(GroupTotals(readline()));
