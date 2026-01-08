/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    if (nums.length == 1) return nums;
    let l = -1;
    let r = nums.length;
    let check = 0;
    while(check<r){
        if(check==l){
            check++;
            continue;
        } 
        if(nums[check]===0){
            l++;
            nums[check]=nums[l];
            nums[l]=0;
        }else if(nums[check]===2){
            r--;
            nums[check]=nums[r];
            nums[r]=2;
        }else{
            check++;
        }
    }
    return nums;
};