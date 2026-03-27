/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    nums.sort();
    let ans = false;
    for(let i=1; i<nums.length; i++){
        if(nums[i]===nums[i-1]){
            ans = true;
            break;
        }
    }
    return ans;
};