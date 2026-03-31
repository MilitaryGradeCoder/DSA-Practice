/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let slow = head;
    let fast = head;
    let flag = false;
    while(fast !== null){
        slow = slow.next;
        if(fast.next != null){
            fast = fast.next.next;
        }else{
            break;
        } 
        if (slow === fast){
            flag = true;
            break;
        }
    }
   return flag;
};