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
    let stack1 = [];
    let curr = l1;
    while(curr != null){
        stack1.push(curr.val);
        curr = curr.next;
    }
    let num1Arr = []
    while (stack1.length != 0){
        let digit  = stack1.pop();
        num1Arr.push(digit);
    }
    
    curr = l2;
    while(curr != null){
        stack1.push(curr.val);
        curr = curr.next;
    }
    let num2Arr = []
    while (stack1.length != 0){
        let digit  = stack1.pop();
        num2Arr.push(digit);
    }
    
    num1 = BigInt(num1Arr.join(""));
    num2 = BigInt(num2Arr.join(""));
    result = (num1 + num2).toString();
    
    let resultNode = new ListNode(0);
    curr = resultNode;
    
    for(let i=result.length-1; i>=0; i--){
        let newNode = new ListNode(parseInt(result[i]));
        curr.next = newNode;
        curr = curr.next;
    }
    return resultNode.next;
};