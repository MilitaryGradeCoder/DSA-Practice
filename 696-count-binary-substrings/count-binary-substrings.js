/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function(s) {
    let allowed = 0;
    let occur = 1;
    let pair = 0;
    for(let i=1; i<s.length; i++){
        
        if(s[i-1] !== s[i]){
            allowed = occur;
            occur = 1;
        }else{
            occur++;
        }

        if(occur<=allowed){
            pair++;
        }
    }
    return pair;
};