/**
 * 执行用时：104 ms
 * 内存消耗：39.4 MB
 */
export function reverseBits(n: number): number {
  const raw = n.toString(2);
  return parseInt(
    Array(32 - raw.length).fill('0').concat(raw.split('')).reverse().join(''),
    2
  );
};
