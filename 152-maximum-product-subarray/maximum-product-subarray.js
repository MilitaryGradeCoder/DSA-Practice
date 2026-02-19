/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    if (nums.length === 1) return nums[0];
    let preProduct = 1;
    let suffProduct = 1;
    let maxProduct = -Infinity;
    let n = nums.length;
    for(let i=0; i<n; i++){
        if(preProduct === 0) preProduct = 1;
        if(suffProduct === 0) suffProduct = 1;
        preProduct *= nums[i];
        suffProduct *= nums[(n-i)-1];
        maxProduct = Math.max(maxProduct, Math.max(preProduct, suffProduct));
    }
    return maxProduct;
};