//https://leetcode.com/problems/widest-vertical-area-between-two-points-containing-no-points/

/**
 * @param {number[][]} points
 * @return {number}
 */
var maxWidthOfVerticalArea = function(points) {
    points.sort((a,b) => a[0] - b[0])
    let maxDelta =0;
    for (let i=0; i< points.length-1; i++){
        maxDelta = Math.max(maxDelta, points[i+1][0] - points[i][0])
    }
    return maxDelta
}