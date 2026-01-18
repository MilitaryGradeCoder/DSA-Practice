/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    let result = [];
    let window = [];
    for(let i=0; i<nums.length; i++){
         while(window.length!=0 && nums[window[window.length-1]]<nums[i]){
            window.pop();
         }
         window.push(i);
         while(window.length!=0 && window[0]<(i-k+1)){
            window.shift();
         }
        if (i>=k-1){
            result.push(nums[window[0]]);
        }
    }
    return result;
};