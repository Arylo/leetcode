export function maxEnvelopes(envelopes: number[][]): number {
  const obj = envelopes.reduce<{[key: number]: number[]}>((obj, [a, b]) => {
    !obj[a] && (obj[a] = []);
    obj[a].push(b);
    return obj;
  }, {})
  
  const arr = Object.keys(obj).map((v) => Number(v)).sort((a, b) => b - a).map<[number, number[]]>((v) => [v, obj[v]]);
  return countLetter(arr);
};

const max = (a: number, b: number) => a > b ? a : b;
const cacheMap: {[key: string]: number} = {};
function countLetter(arr: [number, number[]][], pre: number[] = [], depth: number = 0) {
  if (arr.length === 0) return depth;
  // console.log('----', arr, pre, depth);
  let maxDepth = depth;
  const x = arr[0][0];
  let list = arr[0][1];
  if (pre.length !== 0) {
    list = list.filter((y) => pre[1] > y);
  }
  list.forEach((y) => {
    const key = [...pre, x, y].join(',');
    // console.log('---', `${JSON.stringify(pre)}=>[${x},${y}]`, depth + 1);
    if (cacheMap[key]) {
      maxDepth = max(maxDepth, cacheMap[key]);
      return;
    }
    const num = countLetter(arr.slice(1), [x, y], depth + 1)
    maxDepth = max(maxDepth, num);
    if (pre.length !== 0) {
      cacheMap[key] = num;
    }
  });
  maxDepth = max(maxDepth, countLetter(arr.slice(1), pre, depth));
  return maxDepth;
}
