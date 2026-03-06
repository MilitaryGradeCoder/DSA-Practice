/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
     let nextGreater = new Array(nums2.length);
     let myStack = [];
     for(let i=nums2.length - 1; i>=0; i--){
        if (myStack.length === 0 || nums2[i] > myStack[myStack.length - 1]){
            while(myStack.length != 0 && nums2[i] > myStack[myStack.length - 1]){
                myStack.pop();
            }
            myStack.push(nums2[i]);
            if(myStack.length === 1){
                nextGreater[i] = -1;
            }else{
                nextGreater[i] = myStack[myStack.length - 2]
            }
            
        }else{
            nextGreater[i] = myStack[myStack.length - 1];
            myStack.push(nums2[i]);
        }
     }

     let myHash = new Map();
     for(let i=0; i<nums2.length; i++){
        myHash.set(nums2[i], nextGreater[i]);
     }

     let ans = [];

     for (let i=0; i<nums1.length; i++){
        let ele = myHash.get(nums1[i]);
        ans.push(ele);
     }

     return ans;
};