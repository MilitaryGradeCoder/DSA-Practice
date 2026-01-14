/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
   let l=0;
   let count=0;
   let product=1;
   for(let r=0; r<nums.length; r++){
    product *= nums[r];
    if(product<k) count += (r-l)+1;
    while(product>=k && l<r){
        product = product/nums[l];
        l++;
        if(product<k) count += (r-l)+1;
    }
   }
   return count;
};