const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
 function removeKFromList(l, k) {
  let breakPoint = false
  let prev = null
  let current = l
  do{
    if(!current.next){
      breakPoint = true;
    }
    if(current.value === k){
      console.log(current)
      prev === null ? l = current.next : prev.next = current.next
      console.log(prev)
      if (prev!==null && (prev.next !==null) && (prev.next.value === current.value)){
        removeKFromList(prev, k)
      }
    }
    prev = current
    current = current.next
  } while (breakPoint === false)
  return l
}
module.exports = {
  removeKFromList
};
