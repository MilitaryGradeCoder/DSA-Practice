/**
 * @param {string} s
 * @return {number}
 */
var minimumDeletions = function(s) {
    let st = [];
    let count = 0;
    for(let i=0; i<s.length; i++){
        if(st.length!=0 && st[st.length - 1] === 'b' && s[i]==='a'){
            st.pop();
            count++;
        }else{
            st.push(s[i]);
        }
    }
   return count;
};