/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let actualNum = BigInt(digits.join(""));
    let resultNumStr = (actualNum+1n).toString();
    let result = []
    for (let i=0; i<resultNumStr.length; i++){
        result.push(parseInt(resultNumStr[i]));
    }
    return result;
};