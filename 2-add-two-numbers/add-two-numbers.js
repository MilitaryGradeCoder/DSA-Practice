/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */


var addTwoNumbers = function(l1, l2) {
    let result = [];
    let curr1 = l1;
    let curr2 = l2;
    let carry = 0;
    while(curr1 != null || curr2 != null){
        let digit1 = 0;
        curr1 != null ? digit1 = curr1.val : digit1 = 0;
        let digit2 = 0;
        curr2 != null ? digit2 = curr2.val : digit2 = 0;
        let sum = digit1 + digit2 + carry;
        carry = 0;
        carry = (sum - (sum%10))/10;
        result.push(sum%10);
        curr1 != null ? curr1 = curr1.next : curr1 = null;
        curr2 != null ? curr2 = curr2.next : curr2 = null;
    }
    if (carry != 0) result.push(carry);
    
    let resultNode = new ListNode(0);
    let resultCurr = resultNode;
    for (let i=0; i<result.length; i++){
        let node = new ListNode(result[i]);
        resultCurr.next = node;
        resultCurr = resultCurr.next;
    }
    return resultNode.next;
};