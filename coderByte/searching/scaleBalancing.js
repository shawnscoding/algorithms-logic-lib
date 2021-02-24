// Scale Balancing
// Have the function ScaleBalancing(strArr) read strArr which will contain two elements, the first being the two positive integer weights on a balance scale (left and right sides) and the second element being a list of available weights as positive integers. Your goal is to determine if you can balance the scale by using the least amount of weights from the list, but using at most only 2 weights. For example: if strArr is ["[5, 9]", "[1, 2, 6, 7]"] then this means there is a balance scale with a weight of 5 on the left side and 9 on the right side. It is in fact possible to balance this scale by adding a 6 to the left side from the list of weights and adding a 2 to the right side. Both scales will now equal 11 and they are perfectly balanced. Your program should return a comma separated string of the weights that were used from the list in ascending order, so for this example your program should return the string 2,6

// There will only ever be one unique solution and the list of available weights will not be empty. It is also possible to add two weights to only one side of the scale to balance it. If it is not possible to balance the scale then your program should return the string not possible.
// Examples
// Input: ["[3, 4]", "[1, 2, 7, 7]"]
// Output: 1
// Input: ["[13, 4]", "[1, 2, 3, 6, 14]"]
// Output: 3,6
// Tags
// arraysearchinghash tableFacebook

function ScaleBalancing(strArr) {
  let left = JSON.parse(strArr[0])[0];
  let right = JSON.parse(strArr[0])[1];
  let list = JSON.parse(strArr[1]);
  for (let i = 0; i < list.length; i++) {
    if (left + list[i] === right || left === right + list[i]) {
      return list[i].toString();
    }
  }

  for (let i = 0; i < list.length; i++) {
    for (let j = i + 1; j < list.length; j++) {
      if (
        left + list[i] + list[j] === right ||
        left === right + list[i] + list[j]
      ) {
        if (list[i] > list[j]) return `${list[j]},${list[i]}`;
        else return `${list[i]},${list[j]}`;
      } else if (
        left + list[i] === right + list[j] ||
        left + list[j] === right + list[i]
      ) {
        if (list[i] > list[j]) return `${list[j]},${list[i]}`;
        else return `${list[i]},${list[j]}`;
      }
    }
  }

  return "not possible";
}

// keep this function call here
console.log(ScaleBalancing(readline()));
