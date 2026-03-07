/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
    let mySet = new Set();
    let lastOcc = new Object();
    let stack = [];

    for(let i=0; i<s.length; i++){
        lastOcc[s[i]] = i;
    }

    for(let i=0; i<s.length; i++){
        if(!mySet.has(s[i])){
            if(stack.length == 0){
                stack.push(s[i]);
                mySet.add(s[i]);
            }else if(stack[stack.length-1] < s[i]){
                stack.push(s[i]);
                mySet.add(s[i]);
            }else{
                while(stack.length != 0 && stack[stack.length-1] > s[i] && lastOcc[stack[stack.length-1]] > i){
                    mySet.delete(stack[stack.length-1]);
                    stack.pop();
                }
                stack.push(s[i]);
                mySet.add(s[i]);
            }
        }
    }
    return stack.join("");

};