/**
 * @param {string[]} queries
 * @param {string[]} words
 * @return {number[]}
 */
var numSmallerByFrequency = function(queries, words) {
    function freq(str){
        let count = 0;
        let smallest = "z";
        for(let i=0; i<str.length; i++){
            if(str[i]===smallest) count++;
            if(str[i]<smallest){
                smallest = str[i];
                count = 1;
            }
        }
        return count;
    }
    let answer = [];
    for (let q=0; q<queries.length; q++){
        let count = 0;
        let fq = freq(queries[q]);
        for(let w=0; w<words.length; w++){
            if(words[w].length < fq) continue;
            if(freq(words[w])>fq) count++;
        }
        answer.push(count);
    }
    return answer;
};