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
var isValidBST = function(root) {
    return isValid(root, Infinity, -Infinity);

    function isValid (node, high, low){
        if (node===null) return true;

        if (node.val >= high || node.val <= low) return false;

        let leftValidity = isValid(node.left, node.val, low);
        let rightValidity = isValid(node.right, high, node.val);

        if (leftValidity && rightValidity){
            return true;
        }else{
            return false;
        }
    }
};