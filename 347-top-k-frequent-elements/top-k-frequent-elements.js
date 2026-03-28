/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let myMap = new Map();
    for(let i=0; i<nums.length; i++){
        myMap.set(nums[i], myMap.get(nums[i])+1 || 1);
    }
    let freqArr = [];
    for(const [key, value] of myMap){
        freqArr.push([key, value]);
    }
    freqArr.sort((a,b)=>b[1]-a[1]);
    let ans = [];
    for(let i=0; i<k; i++){
        ans.push(freqArr[i][0]);
    }
    return ans;
};