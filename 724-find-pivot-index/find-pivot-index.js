/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let preSum = [];
    let sum = 0;
    preSum.push(sum);
    for (let i=1; i<nums.length; i++){
        sum += nums[i-1];
        preSum.push(sum);
    }
    let cumSum = sum + nums[nums.length-1];
    
    let ans = -1;
    for(let i=0; i<preSum.length; i++){
        if(preSum[i]===(cumSum - (preSum[i] + nums[i]))){
            ans = i;
            break;
        }
    }
    return ans;
};