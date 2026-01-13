/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    if (nums.length == 1) return nums[0];
    let l = 0;
    let r = k-1;
    let sum = 0;
    for(let i=0; i<k; i++){
        sum += nums[i];
    }
    let maxSum = sum;
    while(r<nums.length-1){
        sum = (sum + nums[r+1]) - nums[l];
        if (sum>maxSum) maxSum = sum;
        l++;
        r++;
    }
    return maxSum/k;
};