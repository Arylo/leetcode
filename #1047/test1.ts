/**
 * 执行用时：92 ms
 * 内存消耗：40.7 MB
 */
export function removeDuplicates(S: string): string {
  let length = 0;
  let curS = S;
  do {
    length = curS.length;
    curS = curS.replace(/(\w)\1/g, '');
  } while (length !== curS.length);
  return curS;
};
