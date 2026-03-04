/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function(mat) {
    let count = 0;
    let colCount = new Array(mat[0].length).fill(0);
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
        if(rowCount === 1 && colCount[rowPosition] === 1){
            if(i === mat.length - 1){
                count++;
            }else{
                let flag = true;
                for(let row = i+1; row<mat.length; row++){
                    if(mat[row][rowPosition]===1){
                    flag = false;
                    break;
                    }
                }
                if(flag==true) count++;
            }
        }
    }
    return count;
};