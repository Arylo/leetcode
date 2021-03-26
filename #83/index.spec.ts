import { ListNode } from '.';
import { startTest } from '../utils';

const fnName = 'deleteDuplicates';

const newNode = (val = 0, next: ListNode | null = null): ListNode => ({ val, next });
const newListNode = (arr: number[]) => {
  let root: ListNode | null = null;
  let tail: ListNode | null = null;
  arr.forEach((item) => {
    const node = newNode(item);
    if (!root) root = node;
    if (tail) tail.next = node;
    tail = node;
  });
  return root;
};

const units: Array<[any[], any]> = [
  [
    [newListNode([1,1,2])], 
    newListNode([1,2]),
  ],
  [
    [newListNode([1,1,2,3,3])], 
    newListNode([1,2,3]),
  ],
];

export default startTest(__dirname, fnName, units);
