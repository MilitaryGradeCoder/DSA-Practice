/**
 * @param {number[]} nums
 * @return {number[]}
 */
var transformArray = function(nums) {
    for (let i=0; i<nums.length; i++){
        if(nums[i]%2!=0){
            nums[i]=1
        } else {
            nums[i]=0;
        }
    }
    return nums.sort((a,b)=>a-b);
};