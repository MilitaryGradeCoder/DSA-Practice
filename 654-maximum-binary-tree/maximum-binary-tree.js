/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {
    return construct(0, nums.length-1);

    function construct(start, end){
        if(start>end) return null;
        
        let maxIdx = start;
        let maxVal = nums[start];
        for(let i=start; i<=end; i++){
            if(nums[i]>maxVal){
                maxVal = nums[i];
                maxIdx = i;
            } 
        }
        let node = new TreeNode(nums[maxIdx]);

        node.left = construct(start, maxIdx-1);
        node.right = construct(maxIdx+1, end);

        return node;
    }
};