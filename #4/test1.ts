export const findMedianSortedArrays = (nums1: number[], nums2: number[]) => {
  const arr = nums1.concat(nums2).sort((a, b) => a - b);

  const midPoint = arr.length / 2;

  if (arr.length % 2 === 1) {
    return arr[Math.floor(midPoint)];
  } else {
    return (arr[midPoint] + arr[midPoint - 1]) / 2;
  }
};
