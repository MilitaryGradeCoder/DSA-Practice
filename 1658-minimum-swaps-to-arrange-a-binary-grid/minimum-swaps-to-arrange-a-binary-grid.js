/**
 * @param {number[][]} grid
 * @return {number}
 */
var minSwaps = function(grid) {
    let backZeroArr = [];
    let n = grid.length;
    for (let i = 0; i<n; i++){
        let zeroCount = 0;
        let j = n - 1;
        while(grid[i][j] === 0 && j>=0){
            zeroCount++;
            j--;
        }
        backZeroArr.push(zeroCount);
    }
    let swaps = 0;
    let flag = false;
    for(let i=0; i<=n-2; i++){
        if(backZeroArr[i] < (n-1)-i){
            let j=i+1;
            while((backZeroArr[j] < (n-1)-i) && j<n){
                j++;
            }
            if(j<n){
                while(j > i){
                    backZeroArr[j-1] = backZeroArr[j-1] + backZeroArr[j];
                    backZeroArr[j] = backZeroArr[j-1] - backZeroArr[j];
                    backZeroArr[j-1] = backZeroArr[j-1] - backZeroArr[j];
                    swaps++;
                    j--;
                }
            }else{
                flag = true;
                break;
            }
        }
        if (flag) break;
    }

    if(flag){
        return -1;
    }else{
        return swaps;
    }
};