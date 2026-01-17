/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function(s) {
    let nums = []
    for(let i=0; i<s.length; i++){
        if(s.charCodeAt(i)>=48 && s.charCodeAt(i)<=57){
            nums.push(parseInt(s[i]));
        }
    }
    if (nums.length <=1) return -1;
    nums.sort((a,b)=>b-a);
    let largest = nums[0];
    for(let i=1; i<nums.length; i++){
        if(largest != nums[i]){
            return nums[i];
        }
    }
    return -1;
};