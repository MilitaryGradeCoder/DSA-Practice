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
       while(r<=nums.length && flips>=0){
        if(nums[r]===0) flips--;
        r++;
        }
       if (maxOnes < ((r-1)-l)) maxOnes = (r-1)-l;
        while(flips<0 && l<r){
            if(nums[l]===0) flips++;
            l++;
        }
    }
    return maxOnes;
};