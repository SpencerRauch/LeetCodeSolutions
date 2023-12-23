// https://leetcode.com/problems/path-crossing/

/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function(path) {
    let visited = {"0, 0":true}
    let location = [0,0]
    for (let direction of path){
        if (direction === "N"){
            location[1]++
        } else if (direction === "S"){
            location[1]--
        } else if (direction === "W"){
            location[0]--
        } else if (direction === "E"){
            location[0]++
        }
        let strLocation = `${location[0]}, ${location[1]}`
        if (visited.hasOwnProperty(strLocation)){
            return true
        }
        visited[strLocation] = true;
    }
    return false
};