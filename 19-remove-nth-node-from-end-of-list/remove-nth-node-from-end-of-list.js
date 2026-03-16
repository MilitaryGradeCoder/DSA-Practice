/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    if(n==1 && head.next == null) return null;
    let front = new ListNode(0);
    front.next = head;
    let back = new ListNode(0);
    back.next = head;
    while(front != null){
        front = front.next;
        if (n <= -1){
            back = back.next;
        }
        n--;  
    }
    if(back.next == head){
        return back.next.next;
    }
    back.next = back.next.next;
    return head;
};