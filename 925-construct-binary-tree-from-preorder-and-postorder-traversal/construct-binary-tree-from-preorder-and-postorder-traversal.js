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
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var constructFromPrePost = function(preorder, postorder) {
    let myMap = new Map();
    for (let i = 0; i<postorder.length; i++){
        myMap.set(postorder[i], i);
    }
    return construct(0,preorder.length-1, 0, postorder.length-1);

    function construct(preStart, preEnd, postStart, postEnd){
        if(preEnd < preStart || postEnd < postStart) return null;

        let root = new TreeNode(preorder[preStart]);

        if(preStart === preEnd) return root;
        
        let position = myMap.get(preorder[preStart+1]);

        let preLength = position - postStart + 1;

        root.left = construct(preStart+1, preStart+preLength, postStart, position);
        root.right = construct(preStart+preLength+1, preEnd, position+1, postEnd-1);
        return root;
    }
};