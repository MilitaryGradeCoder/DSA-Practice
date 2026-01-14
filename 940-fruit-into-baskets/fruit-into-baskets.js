/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
    let l=0;
    let types = new Map();
    let maxFruits = 0;
    for(let r=0; r<fruits.length; r++){
        if(types.has(fruits[r])){
            types.set(fruits[r], (types.get(fruits[r])+1));
        }else{
            types.set(fruits[r], 1);
        }
        if(types.size<=2){
            if (maxFruits < ((r-l)+1)) maxFruits = (r-l)+1
        }
        while(types.size>2){
            types.set(fruits[l],(types.get(fruits[l])-1));
            if(types.get(fruits[l]) == 0){
                types.delete(fruits[l])
            }
            l++;
        }
    }
    return maxFruits;
};