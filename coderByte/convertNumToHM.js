function TimeConvert(num) {
  const hour = Math.floor(num / 60);
  const min = num % 60;
  // code goes here

  return `${hour}:${min}`;
  // 60 1 120 2
}

// keep this function call here
console.log(TimeConvert(readline()));
// console.log(TimeConvert(10));
