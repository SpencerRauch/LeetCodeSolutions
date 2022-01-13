/**
 * @param {number[][]} points
 * @return {number}
 */
 var findMinArrowShots = function(points) {
    let arrows = 0;
    points.sort((a,b) => (a[0]-b[0]))
    let i = 0;
    while (i < points.length){
        let left = points[i][0] // initialize first balloon / first remaining balloon as our range
        let right = points[i][1]
        i++
        while (i < points.length && points[i][0] <= right && points[i][1] >= left){ // if the next ballon over laps current range
            left = Math.max(points[i][0], left) // make our left position the right most left
            right = Math.min(points[i][1], right) // make our right the left most right 
            i++ // look at next balloon to see if it's in our new range
        } // all balloons found in this loop can be hit with a single arrow 
        arrows++ // so one arrow for that while loop takes the maximum amount of balloons out from the left
    }
    return arrows
                               
}; 

// https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/