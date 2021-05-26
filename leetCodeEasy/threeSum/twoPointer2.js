var threeSum = function (nums) {
  // //     sort nums, define res
  // //     if nums[0] > 0, break
  // // left++ and right-- as loop goes
  // // if sum is 0 push to res
  //     // if num[left] === num[left++] loop left for left++, same goes for right

  nums.sort((a, b) => a - b);
  const res = [];

  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) break;
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];
      // if not 0, modify left or right depending on the issue
      if (sum < 0) left++;
      else if (sum > 0) right--;
      else {
        res.push([nums[i], nums[left], nums[right]]);

        let temp = left;
        while (left < right && nums[left] === nums[left + 1]) left++;
        if (temp === left) {
          while (left < right && nums[right] === nums[right - 1]) right--;
        }

        left++;
        right--;
      }
    }
  }

  return res;
};
