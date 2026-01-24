/**
 * @param {number[]} nums
 * @return {number}
 */
var minPairSum = function(nums) {
    let res = 0;
    nums.sort((a,b)=>b-a);
    let l = 0;
    let r = nums.length-1;
    while(l<r){
        res = Math.max(res, (nums[l]+nums[r]));
        l++;
        r--;
    }
    return res;
};