/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function(nums, k) {
    nums.sort((a,b)=>b-a);
    let l = 0;
    let r = k-1;
    let minDiff = Infinity;
    while(r<=nums.length){
        if(minDiff > nums[l]-nums[r]) minDiff = nums[l]-nums[r];
        l++;
        r++;
    }
    return minDiff;
};