/**
 * 执行用时：104 ms
 * 内存消耗：43.9 MB
 */
export function isMonotonic(A: number[]): boolean {
  if (A.length <= 1) return true;
  let prev = A[0];
  let order = 0;
  for (let i = 1; i < A.length; i++) {
    const cur = A[i];
    if (cur === prev) continue;
    if (order > 0 && cur < prev) return false;
    if (order < 0 && cur > prev) return false;
    order = cur - prev;
    prev = cur;
  }
  return true;
};
