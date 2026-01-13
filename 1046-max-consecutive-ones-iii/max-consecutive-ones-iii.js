/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    if (k === nums.length) return k;
    let l=0;
    let r=0;
    let maxOnes = 0;
    let flips = k;
    while(r<nums.length){
        if(nums[r]===1){
        r++;
            if(maxOnes < (r-l)) maxOnes = r-l;
        }else if(flips>0){
        r++;
            if(maxOnes < (r-l)) maxOnes = r-l;
        flips--;
        }else{
        l++;
        r=l;
        flips = k;
        }
    }
    return maxOnes;
};