type TLetterLink = [number, number[], TLetterLink?];

export function maxEnvelopes(envelopes: number[][]): number {
  const link = envelopes.sort((a, b) => a[0] - b[0])
    .reduce<TLetterLink | undefined>((link, [a, b]) => {
      if (!link || link[0] !== a) {
        link = [a, [], link];
      }
      if (link && link[0] === a && !link[1].includes(b)) {
        link[1].push(b);
      }
      return link;
    }, undefined);
  // console.log(link);
  // console.log(countLetter(link));
  return countLetter(link);
};

const max = (a: number, b: number) => a > b ? a : b;
const map: {[key: string]: number} = {};

function countLetter(link?: TLetterLink, pre: number[] = [], depth: number = 0) {
  // console.log('--', link, pre, depth);
  if (!link) return depth;
  let maxDepth = depth;
  if (pre.length > 0) {
    link[1].filter((v) => pre[1] > v).forEach((y) => {
      const key = `${pre[0] || ''},${pre[1] || ''},${link[0]},${y}`;
      if (map[key]) {
        maxDepth = max(maxDepth, map[key]);
        return;
      }
      // console.log('---', `[${pre}] => [${link[0]}, ${y}]`, depth + 1);
      const num = countLetter(link[2], [link[0], y], depth + 1);
      maxDepth = max(maxDepth, num);
      map[key] = num;
    });
  } else {
    link[1].map((y) => {
      // console.log('---', `[${pre}] => [${link[0]}, ${y}]`, depth + 1);
      const num = countLetter(link[2], [link[0], y], depth + 1);
      maxDepth = max(maxDepth, num);
    });
  }
  maxDepth = max(maxDepth, countLetter(link[2], pre, depth));
  return maxDepth;
}
