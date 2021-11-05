/**
 * @param {number[]} values
 * @return {number}
 */
 var maxScoreSightseeingPair = function(values) {
     debugger;
    let max = 0;
    for (let i = 0; i<values.length-1; i++){
        for (let j = i + 1; j <values.length; j++){
            let score = values[i] + values[j] +(i - j);
            max = Math.max(max, score);
        }
    }
    return max
};

console.log(maxScoreSightseeingPair([8,1,5,2,6]))
https://leetcode.com/problems/best-sightseeing-pair/