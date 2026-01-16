/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let indexMap = new Map();
    for(let i=0; i<nums.length; i++){
        indexMap.set(i, nums[i]);
    }
    nums.sort((a,b)=>a-b);
    let l=0;
    let r=nums.length-1;
    let first = 0;
    let second = 0;
    while(l<r){
        if(nums[l]+nums[r]===target){
            first = nums[l];
            second = nums[r];
            break;
        }else if(nums[l]+nums[r]>target){
            r--;
        }else{
            l++;
        }
    }
    let res = [];
    indexMap.forEach((value, key)=>{
        if(value === first){
            res.push(key)
            value = null;
        } 
        if(value === second){
            res.push(key)
        }
    })
    return res;
};