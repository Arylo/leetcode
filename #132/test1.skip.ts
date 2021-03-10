export function minCut(s: string): number {
  const arr = [];
  // console.log('**', s);
  let lastStr = s;
  while (true) {
    const [pre, cur, last] = cut(lastStr);
    console.log(lastStr, '->', [pre, cur, last]);
    arr.push(...pre?.split(''), cur);
    lastStr = last;
    if (!last || last.length === 1) {
      arr.push(last);
      break;
    }
    // console.log('---', arr, [...pre.split(''), cur, last]);
  }
  console.log('**', arr.filter(Boolean));
  return 0;
  // return arr.filter(Boolean).length - 1;
};

function cut(s: string): string[] {
  if (s.length === 1) {
    return [s];
  }
  const matches = s.match(/((\w)\w?\2)/);
  // console.log(matches);
  if (!matches) {
    return [s];
  }
  let str = '';
  const map: string[] = [];
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (map.includes(c)) continue;
    map.push(c);
    const list = [];
    for (let j = i; j < s.lastIndexOf(c); j++) {
      if ()
      list.push(j);
    }
    console.log(list);
    if (str) break;
  }
  if (!str) return [s];
  return [s.substr(0, s.indexOf(str)), str, s.substr(s.indexOf(str) + str.length)];
}

// minCut('coder');
// console.log('---')
// minCut('efe');
// console.log('---')
// minCut('eefee');
// console.log('---')
// minCut('aa');
// console.log('---')
// minCut('cabababcbc');
// console.log('---')
minCut('aaabaa');
console.log('---')
minCut('aabaaa');
