export const searchInsert = (nums: number[], target: number) => {
  if (nums.length === 0) {
    return 0;
  }
  let index = nums.indexOf(target);
  if (index !== -1) {
    return index;
  } else if (nums[0] > target) {
    return 0;
  } else if (nums[nums.length - 1] < target) {
    return nums.length;
  }
  for (let i = 0; i < nums.length; i++) {
    const cNum = nums[i], lNum = nums[i + 1];
    if (cNum > target) {
      return i;
    }
    if (lNum < target) {
      continue;
    } else {
      return i + 1;
    }
  }
  return nums.length;
};
