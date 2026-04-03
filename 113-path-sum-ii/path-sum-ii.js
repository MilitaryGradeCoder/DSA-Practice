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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    let res = [];
    goToLeaf(root, [], 0);
    
    function goToLeaf(node, path, sum){
        if(node===null) return;
        let newSum = sum + node.val;
        let newPath = path.concat(node.val);
        if(node.left===null && node.right===null && newSum === targetSum){
            res.push(newPath);
        }
        goToLeaf(node.left, newPath, newSum);
        goToLeaf(node.right, newPath, newSum);
    }
    return res;
};