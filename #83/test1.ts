import { ListNode } from './index.d';

/**
 * 执行用时：132 ms
 * 内存消耗：40.6 MB
 */
export function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (!head) return head;
  let target: ListNode = { val: head.val, next: null };
  let cur: ListNode = target;
  let next: ListNode | null = null;

  do {
    next = next ? next.next : head.next;
    if (next && next.val !== cur.val) {
      cur.next = { val: next.val, next: null };
      cur = cur.next;
    }
  } while (next?.next)
  return target;
};
