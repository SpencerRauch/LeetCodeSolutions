/**
 * @param {number[][]} points
 * @return {number}
 */
 var findMinArrowShots = function(points) {
    let arrows = 0;
    let sorted = points.sort((a,b) => (a[0]-b[0]))
    let i = 0;
    while (i < points.length){
        let left = points[i][0]
        let right = points[i][1]
        i++
        while (i < points.length && points[i][0] <= right && points[i][1] >= left){
            left = Math.max(points[i][0], left)
            right = Math.min(points[i][1], right)
            i++
        }
        arrows++
    }
    return arrows
                               
}; 

// https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/