/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAbsoluteSum = function(nums) {
    let sum = 0;
    let currMin = 0;
    let maxSum = nums[0];
    let minSum = nums[0];
    for(let i=0; i<nums.length; i++){
        sum += nums[i];
        currMin += nums[i];
        if(sum < nums[i]){
            sum = nums[i];
        }
        if(currMin > nums[i]){
            currMin = nums[i];
        }
        maxSum = Math.max(sum, maxSum);
        minSum = Math.min(currMin, minSum);
    }
    return Math.max(Math.abs(maxSum), Math.abs(minSum));
};