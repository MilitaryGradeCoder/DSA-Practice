/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var canBeEqual = function(s1, s2) {
    let flag = true;
    for(let i=0; i<s1.length; i++){
        if(i<=1){
            if(s1[i] !== s2[i] && s1[i]!==s2[i+2]){
                flag = false;
                break;
            }
        }else{
            if(s1[i] !== s2[i] && s1[i] !== s2[i-2]){
                flag = false;
                break;
            }
        } 
    }
    return flag;
};