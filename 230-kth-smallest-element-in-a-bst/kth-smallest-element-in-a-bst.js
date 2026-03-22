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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let ans = -1;
    let idx = k;
    inorder(root);
    return ans;

    function inorder(node){
        if (node === null) return;
        inorder(node.left);
        idx--;
        if(idx === 0){
            ans = node.val; 
        } 
        if(ans >= 0) return;  
        inorder(node.right);
    }
};