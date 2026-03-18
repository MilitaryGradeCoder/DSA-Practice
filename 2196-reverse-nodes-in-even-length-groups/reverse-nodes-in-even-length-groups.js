/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseEvenLengthGroups = function(head) {
    if(head.next == null) return head;
    function reverse(prev, head, tail){
        let curr = head;
        let temp = curr.next;
        let back = curr;
        while(curr != null && curr != tail){
            curr = temp;
            temp = curr.next;
            curr.next = back;
            back = curr;
        }
        head.next = temp;
        prev.next = tail;
    }

    let curr = head;
    let prev = new ListNode(0);
    prev.next = curr;
   
    let group = 1;
    while(curr != null){
        let currGroup = group;
        let currPrev = prev;
        let currHead = curr;
        while(currGroup > 0 && curr != null){
            prev = curr;
            curr = curr.next;
            currGroup--;
        }
        let currTail = prev;
        
        if((group-currGroup)%2 == 0){
            reverse(currPrev, currHead, currTail);
            prev = currHead;
        }
        group++;
    }
    return head;
};