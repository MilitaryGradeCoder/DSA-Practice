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
        if((nums[l]+nums[r])>res) res = (nums[l]+nums[r])
        l++;
        r--;
    }
    return res;
};