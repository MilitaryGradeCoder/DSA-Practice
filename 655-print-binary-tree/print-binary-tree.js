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
 * @return {string[][]}
 */
var printTree = function(root) {
    //get the height of the tree
    let h = getHeight(root) - 1;
    //build the res matrix filled with ""
    let res = [];
    for (let i=0; i<(h+1); i++){
        res.push(new Array((2**(h+1))-1).fill(""));
    }
    //fix the root position in the matrix
    let c =  Math.floor((res[0].length - 1)/2);
    let r = 0;
    //plot the tree
    plot(root, r, c);
    return res;

    function plot(node, r, c){
        if(node===null) return;
        res[r][c] = `${node.val}`;
        plot(node.left, r+1, c - (2**(h-r-1)));
        plot(node.right, r+1, c + (2**(h-r-1)));
    }

    function getHeight(node){
        if(node===null) return 0;
        let leftHeight = getHeight(node.left);
        let rightHeight = getHeight(node.right);
        return (Math.max(leftHeight, rightHeight) + 1);
    }
};