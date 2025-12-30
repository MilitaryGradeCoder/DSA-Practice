/**
 * @param {number[][]} grid
 * @return {number}
 */
var numMagicSquaresInside = function (grid) {

    if (grid.length < 3 || grid[0].length < 3) {
        return 0;
    }

    function isMagicSquare(grid, rowInit, colInit) {
        let Diag1 = grid[rowInit][colInit] + grid[rowInit + 1][colInit + 1] + grid[rowInit + 2][colInit + 2];
        let Diag2 = grid[rowInit + 2][colInit] + grid[rowInit + 1][colInit + 1] + grid[rowInit][colInit + 2];

        if (Diag1 != Diag2) {
            return false;
        }

        for (let i = 0; i < 3; i++) {
                let sum = grid[rowInit + i][colInit] + grid[rowInit + i][colInit + 1] + grid[rowInit + i][colInit + 2];
                if (sum != Diag1) {
                    return false;
                }
                if ((grid[rowInit + i][colInit] > 9 || grid[rowInit + i][colInit + 1] > 9 || grid[rowInit + i][colInit + 2] > 9) || (grid[rowInit + i][colInit] < 1 || grid[rowInit + i][colInit + 1] < 1 || grid[rowInit + i][colInit + 2] < 1)) {
                    return false;
                }
            
        }

        for (let i = 0; i < 3; i++) {
                let sum = grid[rowInit][colInit + i] + grid[rowInit + 1][colInit + i] + grid[rowInit + 2][colInit + i]
                if (sum != Diag1) {
                    return false;
                }
        }
        let numSet = new Set();
        for (let i = 0; i<3; i++){
            for (let j=0; j<3; j++){
                numSet.add(grid[rowInit + i][colInit + j])
            }
        }
        if(numSet.size < 9) return false;

        return true;
    }

    let magicCount = 0;
    for (let row = 0; row < grid.length - 2; row++) {
        for (let col = 0; col < grid[0].length - 2; col++) {
            if (isMagicSquare(grid, row, col)) {
                magicCount++;
            }
        }
    }

    return magicCount;

};