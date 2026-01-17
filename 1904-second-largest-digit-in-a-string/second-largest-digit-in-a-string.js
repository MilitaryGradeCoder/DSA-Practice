/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function(s) {
    let queue = []
    for(let i=0; i<s.length; i++){
        if(s.charCodeAt(i)>=48 && s.charCodeAt(i)<=57){
            let num = parseInt(s[i]);
            if(queue.length==0){
            queue.push(num);
            }else if(queue.length==1 && num!=queue[0]){
            queue.push(num);
            queue.sort((a,b)=>b-a); 
            }else{
                if(queue.length==2 && num>queue[1] && num!=queue[0]){
                    queue.pop(queue[1])
                    queue.push(num);
                    queue.sort((a,b)=>b-a);
                }
            }
        }
    }
    if (queue.length <=1) return -1;
    return queue[1];
};