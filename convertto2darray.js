//https://leetcode.com/problems/convert-an-array-into-a-2d-array-with-conditions/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function(nums) {
    let map = {}
    let max = 0;
    for (let num of nums){
        map[num] = map[num] ? map[num] + 1 : 1;
        max = Math.max(max, map[num])  
    }
    // console.log(map, max)
    let result = []
    for (let i = 0; i < max; i++){
        result.push([])
    }
    // console.log(result)
    for (let key in map){
        let numKey = +key
        for (let i=0; i<map[key];i++){
            result[i].push(numKey)
        }
    }
    return result
};