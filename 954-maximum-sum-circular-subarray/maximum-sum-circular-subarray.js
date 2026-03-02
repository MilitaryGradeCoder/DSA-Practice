/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function(nums) {
        let total = nums[0];
        let maxTotal = nums[0];
        let minTotal = nums[0];
        let maxSum = nums[0];
        let minSum = nums[0];
        for(let i=1; i<nums.length; i++){
            total += nums[i];
            maxTotal = Math.max((maxTotal + nums[i]), nums[i])
            maxSum = Math.max(maxTotal, maxSum);
            minTotal = Math.min((minTotal + nums[i]), nums[i])
            minSum = Math.min(minTotal, minSum);
        }
        if(maxSum > 0){
            return (Math.max(maxSum, (total - minSum)))
        }else{
            return maxSum;
        }
};