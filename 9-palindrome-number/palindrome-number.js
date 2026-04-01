/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let xStr = x.toString();
    let revStr = xStr.split("").reverse().join("");

    if(xStr === revStr) return true;
    return false;
};