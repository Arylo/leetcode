export const twoSum = (nums: number[], target: number) => {
  const length = nums.length;
  for (let i = 0, iV = nums[i]; i < length; i++, iV = nums[i]) {
    for (let j = i, jV = nums[j]; j < length; j++, jV = nums[j]) {
      if (i === j) {
        continue;
      }
      if (iV + jV === target) {
        return [i, j];
      }
    }
  }
  return [-1, -1];
};
