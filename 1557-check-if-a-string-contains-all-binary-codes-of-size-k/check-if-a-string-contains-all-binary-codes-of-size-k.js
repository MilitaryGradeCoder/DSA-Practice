/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var hasAllCodes = function(s, k) {
    let st = new Set();
    let l=0;
    while(l+k<=s.length){
        let sbStr = s.slice(l,l+k);
        st.add(sbStr);
        l++;
    }
    if(st.size === 2**k){
        return true;
    }
    return false;
};