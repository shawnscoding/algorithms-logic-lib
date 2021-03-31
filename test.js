var addDigits = function (num) {
  //     if less than 10, return result
  //     make string, slice, and add

  let result = num;
  while (true) {
    console.log("called");
    if (result < 10) {
      return result;
    } else {
      let str = result.toString();
      let sum = 0;
      for (let i = 0; i < str.length; i++) {
        sum += Number(str[i]);
      }

      result = sum;
    }
  }
};

console.log(addDigits(38));
