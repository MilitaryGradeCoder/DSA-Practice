/**
 * @param {number[]} nums
 * @return {number[]}
 */
var constructTransformedArray = function(nums) {
    let result = new Array(nums.length);
    for(let i=0; i<nums.length; i++){
        if(nums[i]==0) result[i]=nums[i];
        if(nums[i]>0){
            let moves = nums[i] % nums.length;
            if(i+moves < nums.length){
                result[i] = nums[i+moves];
            }else{
                moves = moves - ((nums.length - 1) - i)
                result[i] = nums[moves-1];
            }
        }else{
            let moves =  Math.abs(nums[i]) % nums.length;
            if(i-moves >= 0){
                result[i] = nums[i-moves];
            }else{
                moves = moves - i;
                result[i] = nums[nums.length - moves]
            }
        }
    }
    return result;
};