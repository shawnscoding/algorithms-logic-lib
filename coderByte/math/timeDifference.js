// Time Difference
// Have the function TimeDifference(strArr) read the array of strings stored in strArr which will be an unsorted list of times in a twelve-hour format like so: HH:MM(am/pm). Your goal is to determine the smallest difference in minutes between two of the times in the list. For example: if strArr is ["2:10pm", "1:30pm", "10:30am", "4:42pm"] then your program should return 40 because the smallest difference is between 1:30pm and 2:10pm with a difference of 40 minutes. The input array will always contain at least two elements and all of the elements will be in the correct format and unique.
// Examples
// Input: ["1:10pm", "4:40am", "5:00pm"]
// Output: 230
// Input: ["10:00am", "11:45pm", "5:00am", "12:01am"]
// Output: 16
// Tags
// string manipulationsearching
const getMins = (str) => {
  let time = str.match(/[a-z]/g).join("");
  let hourMin = str
    .match(/[^a-z]/g)
    .join("")
    .split(":");
  let hour = Number(hourMin[0]);
  let min = Number(hourMin[1]);
  min += hour * 60;
  if (time === "am" && hour < 12) {
    return min;
  } else if (time === "am" && hour === 12) {
    return min - 720;
  } else if (time === "pm" && hour === 12) {
    return min;
  } else {
    return min + 720;
  }
};

function TimeDifference(strArr) {
  //
  const arr = [];
  for (let i = 0; i < strArr.length; i++) {
    let time = strArr[i].match(/[a-z]/g).join("");
    arr.push([getMins(strArr[i]), time]);
  }

  let leastDiff = Infinity;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let diff = 0;
      if (arr[i][1] !== arr[j][1]) {
        let candi1 = Math.abs(arr[i][0] - arr[j][0]);
        let candi2 = Math.abs(1440 - Math.abs(arr[i][0] - arr[j][0]));
        if (candi1 < candi2) diff = candi1;
        if (candi1 >= candi2) diff = candi2;
      } else {
        diff = Math.abs(arr[i][0] - arr[j][0]);
      }
      if (diff < leastDiff) leastDiff = diff;
    }
  }
  return leastDiff;
}

console.log(TimeDifference(readline()));
