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
 * @return {number[][]}
 */
var verticalTraversal = function(root) {
    //obtain height and width of tree to create a matrix
    let rows = getHeight(root); 
    let leftWidth = 0;
    let rightWidth = 0;
    getWidth(root, 0);
    
    let cols = Math.abs(leftWidth) + 1 + rightWidth;
    let x = 0;
    let y = Math.abs(leftWidth);
    // create a 2d matrix
    let mat = [];
    for(let i=0; i<rows; i++){
        mat[i] = new Array(cols).fill(-1);
    }
    // plot the nodes value in the matrix
    getCoordinates(root, x, y);
   
    //iterate this matrix in column wise manner to get vertical traversal
    let ans = [];
    for(let j=0; j<mat[0].length; j++){
        let col = [];
        for(let i=0; i<mat.length; i++){
            if(Array.isArray(mat[i][j])){
                // sort the values if they are at same coordinate
                mat[i][j].sort((a,b)=>a-b);
                for(let p=0; p<mat[i][j].length; p++){
                    col.push(mat[i][j][p]);
                }  
            }
        }
        ans.push(col)
    }
    return ans;


    function getCoordinates(node, x, y){
        if (node===null) return;
        // insert the node values as array because each coordinate can have multiple values
        if(Array.isArray(mat[x][y])){
            mat[x][y].push(node.val);
        }else{
            mat[x][y] = [node.val];
        }
        
        getCoordinates(node.left, x+1, y-1);
        getCoordinates(node.right, x+1, y+1);
    }

    function getHeight(node){
        if (node===null) return 0;

        let leftHeight = getHeight(node.left);
        let rightHeight = getHeight(node.right);

        return Math.max(leftHeight, rightHeight) + 1;
    }

    function getWidth(node, x){
        if(node===null) return;
        if(x<leftWidth) leftWidth = x;
        if(x>rightWidth) rightWidth = x;

        getWidth(node.left, x-1);
        
        getWidth(node.right, x+1);
    }
};