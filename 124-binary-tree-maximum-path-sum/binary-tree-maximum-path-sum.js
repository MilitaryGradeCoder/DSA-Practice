/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
    let maxSum = -Infinity;
    let maxAtroot = checkMax(root);
    if(maxAtroot > maxSum) maxSum = maxAtroot;
    return maxSum;
    function checkMax(node){
        if (node===null) return 0;

        let maxLeft = checkMax(node.left);
        let maxRight = checkMax(node.right);
        
        let nodeMax = Math.max(maxLeft + maxRight + node.val, maxLeft+node.val, maxRight+node.val, node.val);

        if(nodeMax > maxSum) maxSum = nodeMax;

        return Math.max(maxLeft+node.val, maxRight+node.val, node.val); 
    }
};