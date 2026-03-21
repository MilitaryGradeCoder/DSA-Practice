/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    return construct(preorder, 0, preorder.length-1, inorder, 0 , inorder.length - 1);
    
    function construct(preorder, pStart, pEnd, inorder, iStart, iEnd){
        if(iStart > iEnd) return null;

        let node = new TreeNode(preorder[pStart]);
        let nodeIdx;
        for(let i=iStart; i<=iEnd; i++){
            if(preorder[pStart]===inorder[i]){
                nodeIdx = i;
                break;
            }
        }

        node.left = construct(preorder, pStart+1, pStart + (nodeIdx - iStart), inorder, iStart, nodeIdx-1)

        node.right = construct(preorder, pStart + (nodeIdx - iStart) + 1, pEnd, inorder, nodeIdx+1, iEnd)

        return node;
    }
};