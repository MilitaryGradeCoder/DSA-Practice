/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    let ans = new Array(nums.length)
    let myStack = [];
    for(let i=0; i<nums.length; i++){
        if(myStack.length === 0){
            myStack.push(i);
            continue;
        } 

        while(myStack.length != 0 && nums[myStack[myStack.length-1]] < nums[i]){
            ans[myStack[myStack.length-1]] = nums[i];
            myStack.pop();
        }
        myStack.push(i);
    }
        let idx = 0;
        while (idx <= myStack[myStack.length-1]){
            while(nums[idx] > nums[myStack[myStack.length-1]]){
                ans[myStack[myStack.length-1]] = nums[idx];
                myStack.pop();
            }
            idx++;
        }
    
        while(myStack.length != 0){
            ans[myStack[myStack.length-1]] = -1;
            myStack.pop();
        }
        return ans;
};