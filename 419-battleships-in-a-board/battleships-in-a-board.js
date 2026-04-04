/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function(board) {
    let m = board.length;
    let n = board[0].length;
    let count = 1;
    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            if(board[i][j]==="X"){
                let row = i;
                while(row<m && board[row][j]==="X"){
                    board[row][j]=count;
                    row++;
                }
                let col = j+1;
                while(col<n && board[i][col]==="X"){
                    board[i][col]=count;
                    col++;
                }
                count++;
            }
        }
    }
    let mySet = new Set();
    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            if(board[i][j]!= "."){
                mySet.add(board[i][j]);
            }
        }
    }
    return mySet.size;
};