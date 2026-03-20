/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let maxlen = 0;
    let longest = s[0];
    // start with first char (visit all one by one) try to expand the palindrome around it
    let start = 0;
    while (start < s.length){
        // for even length palindrome
        let l = start;
        let r = start + 1;
        while(l>=0 && r<s.length && s[l]===s[r]){
            let len = r - l + 1;
            if(len > maxlen){
                maxlen = len;
                longest = s.substring(l, r+1);
            }
            l--;
            r++;
        }

        // for odd length palindrome 
        l = start - 1;
        r = start + 1;
        while(l>=0 && r<s.length && s[l]===s[r]){
            let len = r - l + 1;
            if(len > maxlen){
                maxlen = len;
                longest = s.substring(l, r+1);
            }
            l--;
            r++;
        }
        start++;
    }
    return longest;
};