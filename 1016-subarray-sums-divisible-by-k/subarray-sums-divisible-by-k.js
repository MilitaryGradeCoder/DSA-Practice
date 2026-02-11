/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysDivByK = function(nums, k) {
    let count = 0;
    let mp = new Map();
    mp.set(0, 1);
    let sum = 0;
    for (let i=0; i<nums.length; i++){
        sum += nums[i];
        let remainder = sum%k;
        if (remainder < 0) remainder += k;
        if (mp.has(remainder)){
            count += mp.get(remainder);
            mp.set(remainder, mp.get(remainder)+1);
        }else{
            mp.set(remainder, 1)
        }
    }
    return count;
};