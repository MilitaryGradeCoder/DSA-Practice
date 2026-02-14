/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if(nums.length===1) return nums[0];
    let r=1;
    let maxSum = nums[0];
    let sum = nums[0];
    while(r<nums.length){
        if(sum < 0 && nums[r]>=sum){
            sum = nums[r];
            maxSum = Math.max(maxSum, sum);
            r++;
            continue;
        }
        sum += nums[r];
        maxSum = Math.max(maxSum, sum);
        r++;
    }
    return maxSum;
};