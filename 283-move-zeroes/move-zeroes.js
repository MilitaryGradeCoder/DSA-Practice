/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    if(nums.length == 1) return nums;
    let l = -1;
    let r = 0;
    while(r < nums.length){
       
        if (nums[r]!=0){
            l++;
            nums[l] = nums[r]
            r++;
            continue;
        }
        r++;
    }
    l++;
    while(l<nums.length){
        nums[l]=0;
        l++;
    }

};