/**
 * 执行用时：160 ms
 * 内存消耗：54 MB
 */
export function calculate(s: string): number {
  const obj = parse(s);
  // console.log(s, JSON.stringify(obj, null, 2));
  // console.log(c({ type: 'depth', list: obj }))
  return c({ type: 'depth', list: obj }).value;
};

function parse(s: string) {
  const arr: {type: string, list: any[]}[] = [];
  const levels: any[] = [arr];
  for (let i = 0; i < s.length; i++) {
    let c = s[i];
    if (c === ' ') continue;

    if (c === '(') {
      levels[levels.length - 1].push({
        type: 'depth',
        list: [],
      });
      const level = levels[levels.length - 1];
      levels.push(level[level.length - 1].list);
    } else if (c === ')') {
      levels.pop();
    } else if (c === '+') {
      levels[levels.length - 1].push({
        type: 'plus',
      });
    } else if (c === '-') {
      levels[levels.length - 1].push({
        type: 'reduce',
      });
    } else {
      const mathes = s.substr(i).match(/^\d+/);
      levels[levels.length - 1].push({
        type: 'value',
        value: mathes ? Number(mathes[0]) : 0,
      });
      if (mathes && mathes[0].length > 1) {
        i += mathes[0].length - 1;
      }
    }
  }
  return arr;
}

function c(obj: { type: string, list: any[] }) {
  let sum = 0;
  obj.list.forEach((item, index) => {
    if (item.type === 'plus' || item.type === 'reduce') return;
    if (index === 0) {
      sum += item.type === 'depth' ? c(item).value : item.value;
      return;
    }
    if (obj.list[index - 1].type === 'plus') {
      sum += item.type === 'depth' ? c(item).value : item.value;;
    }
    if (obj.list[index - 1].type === 'reduce') {
      sum -= item.type === 'depth' ? c(item).value : item.value;;
    }
  });
  return {
    type: 'value',
    value: sum,
  }
}

// calculate("1 + 1");
// console.log('---');
// calculate(" 2-1 + 2 ");
// console.log('---');
// calculate("(1+(4+5+2)-3)+(6+8)");
// console.log('---');
// calculate("(10 + 99)+(6+8)");
