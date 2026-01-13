/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let l = 0;
    let r = 0;
    let maxOnes = 0;
    while(r<nums.length){
        if(nums[r]===1){
            r++;
            if((r-l)>maxOnes) maxOnes = r-l;
        }else{
            r++;
            l=r;
        }
    }
    return maxOnes;
};