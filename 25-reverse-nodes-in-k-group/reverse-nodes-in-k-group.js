/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    function reverse(backPrev, back, frontPrev, front){
        let curr = back;
        let prev = back;
        let temp = curr.next;

        while(curr != frontPrev){
            curr = temp;
            temp = temp.next;
            curr.next = prev;
            prev = curr;
        }
        back.next = front;
        if(backPrev){
            backPrev.next = curr;
        }else{
            head = curr;
        }
    }

    let backPrev = null;
    let back = head;
    let frontPrev = null;
    let front = head;
    while(front != null){
        let moves = k;
        while(front != null && moves > 0){
            frontPrev = front;
            front = front.next;
            moves--; 
        }
        if(moves == 0){
            reverse(backPrev, back, frontPrev, front)
            frontPrev = back;
            backPrev = back;
            back = front;
        }
    }
     return head;
};