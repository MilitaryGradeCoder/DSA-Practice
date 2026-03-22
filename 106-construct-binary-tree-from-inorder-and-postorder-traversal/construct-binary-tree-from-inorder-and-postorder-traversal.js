/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    let myMap = new Map();
    for(let i=0; i<inorder.length; i++){
        myMap.set(inorder[i], i);
    }
    return construct(0, postorder.length-1, 0, inorder.length-1);

    function construct(postStart, postEnd, iStart, iEnd){
        
        if(iStart > iEnd || postStart > postEnd) return null;

        let node = new TreeNode(postorder[postEnd]);

        let position = myMap.get(postorder[postEnd]);
        let rightLen = iEnd - position;

        node.right = construct(postEnd - rightLen, postEnd-1, position+1, iEnd);
        node.left = construct(postStart, (postEnd - rightLen) - 1, iStart, position-1)

        return node;
    }
};