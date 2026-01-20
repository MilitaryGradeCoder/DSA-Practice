/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let l = 0;
    let r = 0;
    let sum = 0;
    let minLen = nums.length+1;
    while(r<nums.length){
        if (nums[r]>=target) return 1;
        sum += nums[r];
            while(sum>=target){
                if((r-l+1) < minLen) minLen = r-l+1;
                sum -= nums[l];
                l++;
            }
    r++; 
    }
    if (minLen<nums.length+1) return minLen;
    return 0;
};