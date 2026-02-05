/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSumTrionic = function(nums) {
    let l=0;
    let r=1;
    let maxSum = -Infinity;
    while (r<nums.length){
        if(nums[r]>nums[r-1]){
            while(nums[r-1]<0 && nums[r+1]>nums[r] && r<nums.length){
                r++;
            }
            let sum = nums[r-1];
            while(nums[r]>nums[r-1] && r<nums.length){
                sum += nums[r];
                r++;
            }
            if(nums[r]<nums[r-1]){
                while(nums[r]<nums[r-1] && r<nums.length){
                    sum += nums[r];
                    r++;
                }
                if(nums[r]>nums[r-1]){
                    l = r;
                    while(nums[r]>nums[r-1] && r<nums.length){
                        sum += nums[r];
                         if(maxSum<sum){
                            maxSum = sum;
                        }
                        r++;
                    }
                   r = l;
                   continue;
                }
            }
        }
        r++;
    }
    return maxSum;
};