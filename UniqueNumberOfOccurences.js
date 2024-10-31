/**
 * https://leetcode.com/problems/unique-number-of-occurrences/
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    const map = new Map();
    // const set = new Set();
    for (let num of arr){
        if (!map.has(num)){
            map.set(num, 1)
        } else {
            map.set(num, map.get(num)+1)
        }
    }
    // for (const value of map.values()){
    //     set.add(value)
    // }
    const set = new Set([...map.values()])
    return set.size == map.size
};