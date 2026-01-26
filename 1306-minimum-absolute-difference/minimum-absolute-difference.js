/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
    arr.sort((a,b)=>a-b);
    let ans = [];
    let i=0;
    let minDiff = Math.abs(arr[i+1]-arr[i])
    while(i<arr.length-1){
        if(Math.abs(arr[i+1]-arr[i]) < minDiff){
            ans = [];
            ans.push([arr[i],arr[i+1]]);
            minDiff = Math.abs(arr[i+1]-arr[i]);
            i++;
        }else if(Math.abs(arr[i+1]-arr[i])===minDiff){
            ans.push([arr[i],arr[i+1]]);
            i++;
        }else{
            i++;
        }
    }
    return ans;
};