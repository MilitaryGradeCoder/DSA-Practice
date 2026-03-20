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
 * @return {boolean}
 */
var isBalanced = function(root) {
    let maxDepth = postorder(root);
    if(maxDepth === -1) return false;
    return true;

    function postorder(node){
        if (node===null) return 0;
        
        let leftDepth = postorder(node.left);
        let rightDepth = postorder(node.right);

        if (leftDepth === -1 || rightDepth === -1) return -1;

        if (Math.abs(leftDepth - rightDepth) > 1){
            return -1;
        }else{
            return (Math.max(leftDepth, rightDepth)) + 1;
        }
    }
};