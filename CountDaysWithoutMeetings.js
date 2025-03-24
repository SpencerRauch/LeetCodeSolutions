/**
 * @param {number} days
 * @param {number[][]} meetings
 * @return {number}
 */
var countDays = function(days, meetings) {
    let schedule = new Array(days+1).fill(0)
    for (let i = 0; i < meetings.length; i++){
        let meeting = meetings[i]
        for (let j = meeting[0]; j <= meeting[1]; j++){
            schedule[j]++
        }
    }
    let count = 0
    for (let i = 1; i < schedule.length; i++){
        if (schedule[i]== 0) count++
    }
    return count
};

// fails test cases, too much memory usage


/**
 * @param {number} days
 * @param {number[][]} meetings
 * @return {number}
 */
var countDays = function(days, meetings) {
    meetings.sort((a,b) => (a[0]-b[0]))
    let latestEnd = 0
    let count = 0
    for (var i = 0; i < meetings.length; i++){
        let meeting = meetings[i]
        if (meeting[0] > latestEnd){
            count += meetings[i][0] - latestEnd - 1
        }
        latestEnd = Math.max(latestEnd, meeting[1])
    }
    if ( latestEnd < days){
        count += days - latestEnd
    }
    return count
};

//sort by start of meeting, iterate through each meeting seeing if the start is after the latest known end. if so, add days between into count.
//if the lastest meeting isn't on the last day, add in the days at the end of the schedule