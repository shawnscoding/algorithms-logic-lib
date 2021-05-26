// https://leetcode.com/problems/3sum-with-multiplicity/submissions/

var threeSumMulti = function (arr, target) {
  let count = 0;
  const hash = {};

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      const I = target - arr[i] - arr[j];

      if (hash[I]) count += hash[I];
    }
    if (!hash[arr[i]]) hash[arr[i]] = 0;
    hash[arr[i]]++;
  }

  return count % (Math.pow(10, 9) + 7);
};
