/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function(mat) {
    let count = 0;
    let colCount = new Array(mat[0].length).fill(0);
    let goodRows = [];
    for(let i=0; i<mat.length; i++){
        let rowCount = 0;
        let rowPosition = 0;
        for(let j=0; j<mat[0].length; j++){
            if(mat[i][j]===1){
                colCount[j]++;
                rowCount++;
                rowPosition = j;
            }
        }
        if(rowCount === 1){
           goodRows.push(rowPosition);
        }
    }
    if (goodRows.length === 0) return 0;
    for(let i=0; i<goodRows.length; i++){
        if(colCount[goodRows[i]] === 1){
            count++;
        }
    }
    return count;
};