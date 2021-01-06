function linearSearch(arr, target) {
  // add whatever parameters you deem necessary - good luck!
  let i = 0;
  for (const val of arr) {
    if (val === target) return i;
    i++;
  }
  return -1;
}
console.log(linearSearch([1, 2, 3], 3));
