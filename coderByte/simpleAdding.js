function SimpleAdding1(num) {
  num = (num * (num + 1)) / 2;
  // code goes here
  return num;
}

// keep this function call here
// to see how to enter arguments in JavaScript scroll down
SimpleAdding1(readline());

function SimpleAdding2(num) {
  result = 0;
  for (i = 1; i <= num; i++) {
    result += i;
  }

  return result;
}

// keep this function call here
SimpleAdding2(readline());

function SimpleAdding3(num) {
  if (num === 0) {
    return num;
  }

  return num + SimpleAdding3(num - 1);
}

// keep this function call here
SimpleAdding3(readline());
