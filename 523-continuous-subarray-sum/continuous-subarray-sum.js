/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function(nums, k) {
    let myMap = new Map();
    let sum = 0;
    let flag = false;
    for(let i=0; i<nums.length; i++){
        sum += nums[i];
        if(sum%k === 0 && i>0){
            flag = true;
            break;
        }
        if (myMap.has(sum%k) && (i - myMap.get(sum%k))>=2){
            flag = true;
            break;
        }else if(myMap.has(sum%k)){
            continue;
        }else{
            myMap.set((sum%k), i)
        }
    }
    return flag;
};