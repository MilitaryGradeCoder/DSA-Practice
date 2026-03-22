/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function(target, position, speed) {
    let speedMap = new Map();
    for(let i=0; i<position.length; i++){
        speedMap.set(position[i], speed[i])
    }
    position.sort((a,b)=>a-b);
    let timeToReach = [];
    for(let i=0; i<position.length; i++){
        timeToReach[i] = (target - position[i]) / speedMap.get(position[i]);
    }
    let fleet = 0;
    while(timeToReach.length > 0){
        let leedCarTime = timeToReach[timeToReach.length-1];
        while(timeToReach[timeToReach.length-1] <= leedCarTime){
            timeToReach.pop();
        }
        fleet++;
    }

    return fleet;
};