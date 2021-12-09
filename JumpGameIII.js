/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function(arr, start) {
    if (arr[start] == 0) return true; // landed on target (base case)
    if (arr[start] == undefined || arr[start] == -1) return false; //outside of array or visited
    let left = start + arr[start] //generate our left and right choices for next index
    let right = start - arr[start] 
    arr[start] = -1 //mark as visited
    
    return canReach(arr, left) || canReach(arr, right) //recursive calls 
};

https://leetcode.com/problems/jump-game-iii/