/**
 * You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.
 */

/**
 * Definition for singly-linked list.
 * 
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

class ListNode {
  constructor(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

var mergeTwoLists = function(l1, l2) {
  if(!l1 || !l2) return (l1||l2);
  if(l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }
};

// const mergeTwoLists = (l1, l2) => {
//   let head = new ListNode(null, null); // to be returned
//   let index = head;

//   while (l1 && l2) {
//     if (l1.val <= l2.val){
//       index.next = l1
//       l1 = l1.next
//     } else {
//       index.next = l2
//       l2 = l2.next
//     }
//     index = index.next
//   }
//   index.next = l1 || l2 

//   return head.next;
// }

let l1 = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 4,
      next: undefined
    }
  }
}

let l2 = {
  val: 1,
  next: {
    val: 3,
    next: {
      val: 4,
      next: undefined
    }
  }
}

console.log("Merge two lists")
console.log(mergeTwoLists(l1,l2))