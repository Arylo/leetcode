export function maxEnvelopes(envelopes: number[][]): number {
  console.log(envelopes.sort((a, b) => b[0] - a[0] || b[1] - a[1]));
  const [arr] = envelopes.sort((a, b) => b[0] - a[0] || b[1] - a[1]).reduce<[number[][], number]>(([arr, x], [a, b]) => {
    if (x !== a) {
      arr.push([]);
      x = a;
    }
    if (x === a) {
      const a = arr[arr.length - 1];
      !a.includes(b) && a.push(b);
    }
    return [arr, x];
  }, [[], 0]);
  console.log(arr);
  return countLetter(arr);
};

const cachedMap: {[key: string]: number} = {};
function countLetter(arr: number[][], pre?: number, depth = 0) {
  console.log('--', pre, depth, '--', arr);
  if (!arr || arr.length === 0) return depth;
  const list = arr[0];
  const key = list.join(',');

  if (cachedMap[key]) {
    return cachedMap[key];
  }
  const results: number[] = [depth];
  if (pre) {
    for (let i = 0; i < list.length; i++)  {
      const val = list[i];
      const key = `${pre},${val}`;
      if (pre > val) {
        let num: number;
        num = countLetter(arr.slice(1), val, depth + 1);
        results.push(num);
        break;
      }
    }
    results.push(countLetter(arr.slice(1), pre, depth));
  } else {
    results.push(
      countLetter(arr.slice(1), list[0], 1),
      countLetter(arr.slice(1)),
    );
  }
  const max = Math.max(...results);
  cachedMap[key] = max;
  return max;
}
