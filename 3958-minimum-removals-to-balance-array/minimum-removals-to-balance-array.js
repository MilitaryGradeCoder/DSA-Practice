/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minRemoval = function(nums, k) {
    if (nums.length == 1) return 0;
    nums.sort((a,b)=>a-b);
        
    let l = 0;
    let r = 0;
    let maxLen = 0;
    while(r<nums.length){
        while(k*nums[l]>=nums[r]){
            if(maxLen < ((r-l) + 1)) maxLen = (r-l) + 1;
            r++;
        }
        l++;
    }
    return (nums.length - maxLen);
}