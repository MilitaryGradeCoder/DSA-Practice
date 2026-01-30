/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let PPArr = [];
    let PP = 1;
    PPArr.push(PP);
    for(let i=1; i<nums.length; i++){
        PP = PP*nums[i-1]
        PPArr.push(PP);
    }

    let SPArr = new Array(nums.length);
    let SP = 1;
    SPArr[nums.length-1] = SP;
    for(let i=nums.length-2; i>=0; i--){
        SP = SP*nums[i+1]
        SPArr[i] = SP;
    }

    let answer = [];
    for(let i=0;i<nums.length;i++){
        answer.push(PPArr[i]*SPArr[i]);
    }
    return answer;
};