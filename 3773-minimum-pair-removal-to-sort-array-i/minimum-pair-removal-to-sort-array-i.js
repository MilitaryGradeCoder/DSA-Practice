/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumPairRemoval = function(nums) {
    let count = 0;
    let n = nums.length;
    for (let i=0; i<=n; i++){
        let flag = true;
        let index =-1;
        let minSum = Infinity;
        for(let j=0; j<nums.length-1; j++){
            if(nums[j]>nums[j+1]){
                flag=false;
            }
            let sum = nums[j]+nums[j+1];
            if (sum<minSum){
                minSum = sum;
                index = j;
            } 
        }
        if (flag){
            break;
        } else{
            nums[index]=minSum;
            nums.splice(index+1, 1);
            count++;
        }
    }
    return count;
};