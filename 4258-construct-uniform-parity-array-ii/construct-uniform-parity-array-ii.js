/**
 * @param {number[]} nums1
 * @return {boolean}
 */
var uniformArray = function(nums1) {
    let oc = 0;
    let ec = 0;
    let smallestOdd = Infinity;
    for(let i=0; i<nums1.length; i++){
        if(nums1[i]%2===0){
            ec++;
        }else{
            oc++;
           if(nums1[i]<smallestOdd){
                smallestOdd = nums1[i];
            }
        }
    }

    if (oc === nums1.length || ec === nums1.length) return true;
    let flag = true;
    for(let i=0; i<nums1.length; i++){
        if(nums1[i]%2==0){
            if(nums1[i]<=smallestOdd){
                flag = false;
                break;
            }
        }
    }
    return flag;
};