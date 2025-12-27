/**
 * @param {number} n
 * @param {number[][]} meetings
 * @return {number}
 */
var mostBooked = function(n, meetings) {
    let sortedMeetings = meetings.sort((a,b)=>a[0]-b[0]);
    let meetingRooms = [];
    for(let i=0; i<n; i++){
        meetingRooms.push([0,0]);
    }

    for(let meeting = 0; meeting<sortedMeetings.length; meeting++){
        let flag = false;
        let latestEnd = Infinity;
        for(let room=0; room<meetingRooms.length; room++){
            latestEnd = Math.min(latestEnd, meetingRooms[room][0])
            if(meetingRooms[room][0] <= sortedMeetings[meeting][0]){
                meetingRooms[room][0] = sortedMeetings[meeting][1];
                meetingRooms[room][1] += 1;
                flag = true;
                break;
            }
        }

        if(flag == false){
            sortedMeetings[meeting][1] = latestEnd + (sortedMeetings[meeting][1] -  sortedMeetings[meeting][0])
            sortedMeetings[meeting][0] = latestEnd;

            meeting --;
        }

    }

    let meetCount = meetingRooms[0][1];
    let maxMeetRoom = 0;
    for(let i = 0; i<meetingRooms.length; i++){
        if(meetingRooms[i][1] > meetCount){
            meetCount = meetingRooms[i][1];
            maxMeetRoom = i;
        }
    }
    
    return maxMeetRoom;
};