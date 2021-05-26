// https://leetcode.com/problems/3sum-closest/

var threeSumClosest = function (nums, target) {
  // define res, closest
  // sort, if sum < target left++ if sum > target right--
  // comapre diff of closest and sum with target, less diff will be closest
  let closest = Infinity;
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];

      if (sum === target) return sum;

      if (target < sum) right--;
      if (target > sum) left++;

      if (Math.abs(target - closest) > Math.abs(target - sum)) closest = sum;
    }
  }
  return closest;
};
