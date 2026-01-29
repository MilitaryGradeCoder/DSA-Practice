/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[][]}
 */
var matrixBlockSum = function(mat, k) {
    let m = mat.length;
    let n = mat[1].length;
    let answer = [];
    //prepare dummy answer matrix
    for(let x=0; x<m; x++){
        answer.push([]);
    }
    //iterate each position
    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            let sum = 0;
            //calculate the sum of (k*2+1) * (k*2+1) matrix by adding all valid elements in it
            for(let r=i-k; r<=i+k; r++){
                for(let c=j-k; c<=j+k; c++){
                    if((r>=0 && r<m) && (c>=0 && c<n)){
                        sum += mat[r][c];
                    }
                }
            }
            answer[i].push(sum);
        }
    }
    return answer;

};